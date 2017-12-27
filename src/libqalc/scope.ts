import * as Tree from "./Tree";
import { UnitNumber, SpecialUnitNumber } from "../unitNumber";
import { evaluate } from "./evaluator";
import * as util from "./util";

export type ScopeMaps = Map<string, Tree.Node>[];

export default class Scope {
	readonly globalScope = new Map<string, Tree.Node>();
	readonly scopes: ReadonlyArray<Map<string, Tree.Node>> = [this.globalScope];
	readonly prefixMap = new Map<string, Tree.Node>();
	readonly canonicalMap = new Map<UnitNumber, UnitNumber>();
	readonly aliasMap = new Map<UnitNumber, Set<Tree.EvaluatedNode>>();
	readonly docMap = new Map<
		string,
		{ comment: string; headings: string[] }
	>();

	constructor(scopes?: Map<string, Tree.Node>[]) {
		if (scopes) this.scopes = scopes;
	}

	addFunctions(...fns: [string, ((...arg: UnitNumber[]) => UnitNumber)][]) {
		for (const [name, fn] of fns) {
			const builtin = new Tree.IdentifierNode(
				"[builtin]",
			) as Tree.EvaluatedNode;
			builtin.value = new SpecialUnitNumber(
				new Tree.NumberNode("[built in]"),
				fn,
				null,
				null,
			);
			evaluate(
				new Tree.InfixFunctionCallNode("=", [
					new Tree.IdentifierNode(name),
					builtin,
				]),
				this,
			);
		}
	}

	setUnit(name: string, val: Tree.Node) {
		if (this.globalScope.has(name))
			throw Error(
				`Unit ${name} already exists.\nUse delete(${name}) to remove it.`,
			);
		this.globalScope.set(name, val);
	}
	setPrefix(prefixName: string, node: Tree.Node) {
		this.prefixMap.set(prefixName, node);
	}
	setUnitOrPrefixRaw(name: string, assignmentNode: Tree.Node) {
		if (name.endsWith("_")) {
			const prefixName = name.substr(0, name.length - 1);
			this.setPrefix(prefixName, assignmentNode);
		} else {
			this.setUnit(name, assignmentNode);
		}
	}
	setUnitOrPrefix(
		name: string,
		assignmentNode: Tree.Node,
		unit: Tree.EvaluatedNode,
	) {
		const evNode = assignmentNode as Tree.EvaluatedNode;
		evNode.value = unit.value.withIdentifier(name);
		this.setUnitOrPrefixRaw(name, assignmentNode);
		this.unifyAliases(evNode, unit);
	}
	getAllUnits() {
		return this.globalScope.keys();
	}

	deleteUnit(name: string) {
		const unit = this.getUnit(name)!;
		const aliases = this.aliasMap.get(this.getCanonical(unit.value)!);
		if (aliases) aliases.delete(unit);
		return this.globalScope.delete(name);
	}

	getUnit(
		name: string,
		{
			withPrefix = true,
			withPluralSuffix = true,
			throwOnError = true,
		} = {},
	): Tree.EvaluatedNode | null {
		if (name.endsWith("_"))
			return this.getPrefix(name.substr(0, name.length - 1));
		const foundScope = this.scopes.find(map => map.has(name));
		if (!foundScope) {
			if (withPrefix)
				for (const prefix of this.prefixMap.keys()) {
					if (name.startsWith(prefix)) {
						let unit = this.getPrefix(prefix);
						if (prefix.length < name.length) {
							const suffix = this.getUnit(
								name.substr(prefix.length),
								{ withPrefix: false, throwOnError: false },
							);
							if (suffix === null) continue;
							const unitValue = evaluate(
								new Tree.InfixFunctionCallNode("·", [
									unit,
									suffix,
								]),
								this,
							);
							if (unitValue.value.isSpecial()) continue; // ignore suffix on functions
							unit = new Tree.InfixFunctionCallNode("=", [
								new Tree.IdentifierNode(name),
								unitValue,
							]) as Tree.EvaluatedNode;
							unit.value = unitValue.value.withIdentifier(name);
						}
						return unit;
					}
				}
			if (withPluralSuffix) {
				const withoutPlural = util.tryRemovePluralSuffix(name);
				if (withoutPlural) {
					return this.getUnit(withoutPlural, {
						withPrefix,
						withPluralSuffix: false,
						throwOnError,
					});
				}
			}
			if (throwOnError) throw Error("unknown unit: " + name);
			else return null;
		}
		let res = foundScope.get(name)!;
		if (!Tree.isEvaluated(res)) {
			foundScope.delete(name);
			return evaluate(res, this);
		} else return res;
	}

	unifyAliases(unit1: Tree.EvaluatedNode, unit2: Tree.EvaluatedNode) {
		const can1 = this.getCanonical(unit1.value),
			can2 = this.getCanonical(unit2.value);
		if (!can1 && !can2) {
			const canonical =
				unit2.value.isSpecial() || unit2.value.dimensions.size > 0
					? unit2.value
					: unit1.value;
			this.canonicalMap.set(unit1.value, canonical);
			this.canonicalMap.set(unit2.value, canonical);
			this.aliasMap.set(canonical, new Set([unit1, unit2]));
			return;
		}
		if (!can2 && can1) {
			this.canonicalMap.set(unit2.value, can1);
			this.aliasMap.get(can1!)!.add(unit2);
			return;
		}
		if (!can1 && can2) {
			this.canonicalMap.set(unit1.value, can2);
			this.aliasMap.get(can2)!.add(unit1);
			return;
		}
		throw Error(
			"unity error, can. form ex. for both " +
				unit1 +
				" and " +
				unit2 +
				":" +
				can1 +
				" and " +
				can2,
		);
	}
	getCanonical(u: UnitNumber) {
		while (true) {
			let u2 = this.canonicalMap.get(u);
			if (!u2) return u2;
			if (u2 === u) return u;
			u = u2;
		}
	}
	getAliases(u: UnitNumber) {
		return [...(this.aliasMap.get(this.getCanonical(u)!) || [])].filter(
			x => !!x.value.id,
		);
	}
	getPrefix(name: string): Tree.EvaluatedNode {
		let res = this.prefixMap.get(name);
		if (!res) throw Error("unknown prefix: " + name);
		if (!Tree.isEvaluated(res)) {
			this.prefixMap.delete(name);
			return evaluate(res, this);
		} else return res;
	}

	withNew(...args: [string, Tree.Node][]) {
		const newScope = new Map<string, Tree.Node>(args);
		return Object.create(this, {
			scopes: { writable: false, value: [newScope, ...this.scopes] },
		});
	}
}
