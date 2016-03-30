import {UnitNumber, SpecialUnitNumber, EvaluatedNode} from './unitNumber';
import {TaggedString} from './output';
import {parse, Token, TokenType, Tree} from './parser';

import gnuUnitsData from '../units_data.txt!text';
import customData from '../custom_data.txt!text';

export function isEvaluated(node: Tree.Node): node is EvaluatedNode {
	return !!(node as any).value;
}
declare var fetch: any;
const loadUnits = (filename: string, data: string) => {
	const lines = data.split("\n");
	const postEvaluate = [] as {reevaluateUnit?: string, evaluateNode?: Tree.Node}[];
	for (let i = 0; i < lines.length; i++) {
		try {
			const line = stripCommentsTrim(lines[i]);
			if (line.length === 0) continue;
			if (line.indexOf("=") >= 0 && line.split("=")[0].search(/[\(\[]/) >= 0) continue;
			const tree = parse(line);
			if (tree instanceof Tree.FunctionCallNode && tree.fnname === '=') {
				const nameNode = tree.operands[0];
				const name = nameNode instanceof Tree.IdentifierNode && nameNode.identifier;
				if(!name) {
					postEvaluate.push({evaluateNode:tree});
					continue;
				}
				if (name.endsWith("_")) {
					const prefixName = name.substr(0, name.length - 1);
					prefixMap.set(prefixName, tree);
				} else {
					unitMap.set(name, tree);
				}
				postEvaluate.push({reevaluateUnit: name});
			} else postEvaluate.push({evaluateNode:tree});
		} catch (e) {
			console.error(filename+":"+(i+1), lines[i], e);
		}
	}
	// force evaluate all units
	for(const {reevaluateUnit, evaluateNode} of postEvaluate) {
		try {
			if(reevaluateUnit) getUnit(reevaluateUnit, [unitMap]);
			if(evaluateNode) evaluate(evaluateNode, [unitMap]);
		} catch (e) { console.error("force-evaluate unit", reevaluateUnit || evaluateNode, e); }
	}
};
export const unitMap = new Map<string, Tree.Node>();
type Scope = Map<string, Tree.Node>[];
export const prefixMap = new Map<string, Tree.Node>();
export const canonicalMap = new Map<UnitNumber, UnitNumber>();
export const aliasMap = new Map<UnitNumber, Set<EvaluatedNode>>();
function addFunctions(...fns: [string, ((...arg: UnitNumber[]) => UnitNumber)][]) {
	for(const [name, fn] of fns) {
		const builtin = new Tree.IdentifierNode("[builtin]") as EvaluatedNode;
		builtin.value = new SpecialUnitNumber(new Tree.NumberNode("[built in]"), fn, null, null);
		evaluate(new Tree.InfixFunctionCallNode("=", [new Tree.IdentifierNode(name), builtin]), [unitMap]);
	}
}
addFunctions(
	["sqrt", num => num.pow(0.5)],
	["ln", num => { num.dimensions.assertEmpty("argument of ln()"); return new UnitNumber(num.value.ln()) }],
	["delete", num => { return unitMap.delete(num.id) ? new UnitNumber(1) : new UnitNumber(0) }],
	["log2", num => { num.dimensions.assertEmpty(); return new UnitNumber(num.value.logarithm(2)) }],
	["exp", num => { num.dimensions.assertEmpty(); return new UnitNumber(num.value.exp()) }],
	["tan", num => { num.dimensions.assertEmpty(); return new UnitNumber(Math.tan(num.value.toNumber())) }],
	["log", num => { num.dimensions.assertEmpty(); return new UnitNumber(num.value.logarithm(10)) }]
);
export function getFunction({name, throwOnError = true}: {name: string, throwOnError?: boolean}): (...args: UnitNumber[]) => UnitNumber {
	const memberAliases: { [name: string]: string } = { '·': 'mul', '': 'mul', '/': 'div', '|': 'div', '^': 'pow', '+': 'plus', '-': 'minus', 'to': 'convertTo' };
	if(name === '#') return l => l.mul(new UnitNumber(-1));
	else if (name in memberAliases) {
		return (l, r) => (l as any)[memberAliases[name]](r);
	} else if(throwOnError) throw Error("unknown function: " + name);
	else return null;
}
function setUnit(name: string, val: Tree.Node) {
	if (unitMap.has(name)) throw Error(`Unit ${name} already exists.\nUse delete(${name}) to remove it.`);
	unitMap.set(name, val);
}
function deleteUnit(name: string, scope: Scope) {
	const unit = getUnit(name, scope);
	const aliases = aliasMap.get(getCanonical(unit.value));
	if (aliases) aliases.delete(unit);
	return unitMap.delete(name);
}
function setUnitOrPrefix(name: string, node: EvaluatedNode, unit: EvaluatedNode) {
	node.value = unit.value.withIdentifier(name);
	if (name.endsWith("_")) {
		const prefixName = name.substr(0, name.length - 1);
		prefixMap.set(prefixName, node);
	} else {
		setUnit(name, node);
	}
	unifyAliases(node, unit);
}
function unifyAliases(unit1: EvaluatedNode, unit2: EvaluatedNode) {
	const can1 = getCanonical(unit1.value), can2 = getCanonical(unit2.value);
	if (!can1 && !can2) {
		const canonical = unit2.value.isSpecial() || unit2.value.dimensions.size > 0 ? unit2.value : unit1.value;
		canonicalMap.set(unit1.value, canonical);
		canonicalMap.set(unit2.value, canonical);
		aliasMap.set(canonical, new Set([unit1, unit2]));
		return;
	}
	if (!can2) { canonicalMap.set(unit2.value, can1); aliasMap.get(can1).add(unit2); return }
	if (!can1) { canonicalMap.set(unit1.value, can2); aliasMap.get(can2).add(unit1); return }
	throw Error("unity error, can. form ex. for both " + unit1 + " and " + unit2 + ":" + can1 + " and " + can2);
}
export function getCanonical(u: UnitNumber) {
	while (true) {
		let u2 = canonicalMap.get(u);
		if (!u2) return u2;
		if (u2 === u) return u;
		u = u2;
	}
}
export function getAliases(u: UnitNumber) {
	return [...(aliasMap.get(getCanonical(u)) || [])].filter(x => !!x.value.id);
}
export function getPrefix(name: string): EvaluatedNode {
	let res = prefixMap.get(name);
	if(!res) throw Error("unknown prefix: "+name);
	if(!isEvaluated(res)) {
		prefixMap.delete(name);
		return evaluate(res, [unitMap]);
	} else return res;
}
export function getUnit(name: string, scope: Scope, {withPrefix = true, withPluralSuffix = true, throwOnError = true} = {}): EvaluatedNode {
	if (name.endsWith("_")) return getPrefix(name.substr(0, name.length - 1));
	const foundScope = scope.find(map => map.has(name));
	if (!foundScope) {
		if (withPrefix) for (const prefix of prefixMap.keys()) {
			if (name.startsWith(prefix)) {
				let unit = getPrefix(prefix);
				if (prefix.length < name.length) {
					const suffix = getUnit(name.substr(prefix.length), scope, { withPrefix: false, throwOnError: false });
					if (suffix === null) continue;
					const unitValue = evaluate(new Tree.InfixFunctionCallNode("·", [unit, suffix]), scope);
					if(unitValue.value.isSpecial()) continue; // ignore suffix on functions
					unit = new Tree.InfixFunctionCallNode("=", [new Tree.IdentifierNode(name), unitValue]) as EvaluatedNode;
					unit.value = unitValue.value.withIdentifier(name);
				}
				return unit;
			}
		}
		if (withPluralSuffix && name[name.length - 1] === 's') return getUnit(name.substr(0, name.length - 1), scope, { withPrefix, withPluralSuffix: false, throwOnError });
		if(throwOnError) throw Error("unknown unit: "+name); else return null;
	}
	let res = foundScope.get(name);
	if(!isEvaluated(res)) {
		foundScope.delete(name);
		return evaluate(res, scope);
	}
	else return res;
}
function stripCommentsTrim(str: string) {
	const commentStart = str.indexOf("#");
	if (commentStart >= 0) str = str.substr(0, commentStart);
	return str.trim();
}
export function parseEvaluate(str: string) {
	return evaluate(parse(stripCommentsTrim(str)), [unitMap]);
}
function evaluate(node: Tree.Node, scope: Scope): EvaluatedNode {
	if(isEvaluated(node)) return node;
	const evNode = node as EvaluatedNode;
	if (node instanceof Tree.NumberNode) {
		evNode.value = new UnitNumber(node.number);
	} else if (node instanceof Tree.IdentifierNode) {
		evNode.value = getUnit(node.identifier, scope).value;
		if(!evNode.value) throw Error("can't resolve "+node.identifier);
	} else if (node instanceof Tree.FunctionCallNode) {
		const op = node.fnname;
		if(op === '!') {
			const name = node.operands[0];
			if(name instanceof Tree.IdentifierNode) {
				evNode.value = UnitNumber.createBaseUnit(name.identifier);
				setUnit(name.identifier, evNode);
			} else throw Error("invalid definition");
		} else if (op === '=' || op === '≈') {
			const [name, val] = node.operands;
			if (name instanceof Tree.IdentifierNode)
				setUnitOrPrefix(name.identifier, evNode, evaluate(val, scope));
			else {
				const leftVal = evaluate(name, scope);
				if(leftVal.value.id) leftVal.value.assign(evaluate(val, scope).value);
				else throw Error("invalid left hand side of assignment");
				evNode.value = leftVal.value;
			}
		} else if (op === '=>') {
			const [argNameNode, val] = node.operands;
			if(argNameNode instanceof Tree.IdentifierNode) {
				const argName = argNameNode.identifier;
				evNode.value = new SpecialUnitNumber(val, arg => {
					const argval = new Tree.IdentifierNode(argName) as EvaluatedNode; argval.value = arg;
					const newScope = new Map<string, Tree.Node>(); newScope.set(argName, argval);
					return evaluate(val.clone(), [newScope, ...scope]).value;
				}, undefined, undefined);
			}
			else throw Error('invalid lambda definition');	
		} else evNode.value = getFunction({name:op})(...node.operands.map(x => evaluate(x, scope)).map(x => x.value));
	} else throw Error("what is " + node);
	return evNode;
}

export function define(unit: EvaluatedNode): TaggedString {
	const t = TaggedString.t;
	const canonical = getCanonical(unit.value);
	const aliases = getAliases(unit.value);
	unit = [...aliases, unit].find(alternative => alternative.value.id === unit.value.id);
	const inverse = unit.value instanceof SpecialUnitNumber && unit.value.inverse.fnTree;
	return (t
		`Definition: ${unit.toTaggedString()}.
${inverse ? t`Inverse:    ${inverse.toTaggedString()}`:""}
${canonical ? canonical == unit.value ? "(Canonical form)" : t`Canonical Form: ${canonical.toTaggedString()}` : ""}

${aliases && aliases.length > 0 ? TaggedString.t`Aliases: ${TaggedString.join(aliases.map(a => a.value), ", ")}` : ""}`
	);
}
function unitConvertedTaggedString(node: Tree.Node) {
	if(node instanceof Tree.FunctionCallNode && node.fnname === 'to') {
		const unit = evaluate(node.operands[1], [unitMap]);
		const numericValue = evaluate(node.operands[0], [unitMap]).value.div(unit.value);
		return TaggedString.t`${numericValue.toString()} ${unit.toTaggedString()}`;
	}
	else return evaluate(node, [unitMap]).value.toTaggedString();
}
export async function qalculate(input: string): Promise<TaggedString> {
	if(input.trim().length === 0) return new TaggedString();
	const ret = parseEvaluate(input);
	if (ret.value.id) return define(ret);
	return TaggedString.t`${ret.toTaggedString()} = ${unitConvertedTaggedString(ret)}`;
}

loadUnits("units_data.txt", gnuUnitsData);
loadUnits("custom_data.txt", customData);