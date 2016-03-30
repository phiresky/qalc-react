import {UnitNumber, EvaluatedNode} from './unitNumber';
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
	for (let i = 0; i < lines.length; i++) {
		try {
			const line = stripCommentsTrim(lines[i]);
			if (line.length === 0) continue;
			if (line.indexOf("=") >= 0 && line.split("=")[0].search(/[\(\[]/) >= 0) continue;
			const tree = parse(line);
			if (tree instanceof Tree.FunctionCallNode && tree.fnname === '=') {
				const nameNode = tree.operands[0];
				const name = nameNode instanceof Tree.IdentifierNode && nameNode.identifier;
				if (name.endsWith("_")) {
					const prefixName = name.substr(0, name.length - 1);
					prefixMap.set(prefixName, tree);
				} else {
					setUnit(name, tree);
				}
			} else evaluate(tree);
		} catch (e) {
			console.error(filename+":"+(i+1), lines[i], e);
		}
	}
	// force evaluate all units
	for (const name of unitMap.keys()) {
		try { getUnit(name); } catch (e) { console.error("force-evaluation", e); }
	}
};
export const unitMap = new Map<string, Tree.Node>();
export const prefixMap = new Map<string, Tree.Node>();
export const canonicalMap = new Map<UnitNumber, UnitNumber>();
export const aliasMap = new Map<UnitNumber, Set<UnitNumber>>();
export const functionMap = new Map<string, (...arg: UnitNumber[]) => UnitNumber>([
	["sqrt", num => num.pow(0.5)],
	["ln", num => { num.dimensions.assertEmpty("argument of ln()"); return new UnitNumber(num.value.ln()) }],
	["delete", num => { return unitMap.delete(num.id) ? new UnitNumber(1) : new UnitNumber(0) }],
	["log2", num => { num.dimensions.assertEmpty(); return new UnitNumber(num.value.logarithm(2)) }],
	["exp", num => { num.dimensions.assertEmpty(); return new UnitNumber(num.value.exp()) }],
	["tan", num => { num.dimensions.assertEmpty(); return new UnitNumber(Math.tan(num.value.toNumber())) }],
	["log", num => { num.dimensions.assertEmpty(); return new UnitNumber(num.value.logarithm(10)) }],
	["#", num => num.mul(new UnitNumber(-1))] // unary minus
]);
export function getFunction(name: string): (...args: UnitNumber[]) => UnitNumber {
	const memberAliases: { [name: string]: string } = { '·': 'mul', '': 'mul', '/': 'div', '|': 'div', '^': 'pow', '+': 'plus', '-': 'minus', 'to': 'convertTo' };
	if (name in memberAliases) {
		return (l, r) => (l as any)[memberAliases[name]](r);
	} else if (functionMap.has(name)) {
		return functionMap.get(name);
	} else throw Error("unknown function: " + name);
}
function setUnit(name: string, val: Tree.Node) {
	if (unitMap.has(name)) throw Error("duplicate: " + name);
	unitMap.set(name, val);
}
function deleteUnit(name: string) {
	const unit = getUnit(name);
	const aliases = aliasMap.get(getCanonical(unit.value));
	if (aliases) aliases.delete(unit.value);
	return unitMap.delete(name);
}
function setUnitOrPrefix(name: string, node: EvaluatedNode, unit: EvaluatedNode) {
	node.value = unit.value.withIdentifier(name);
	unifyAliases(node.value, unit.value);
	if (name.endsWith("_")) {
		const prefixName = name.substr(0, name.length - 1);
		prefixMap.set(prefixName, node);
	} else {
		setUnit(name, node);
	}
}
function unifyAliases(unit1: UnitNumber, unit2: UnitNumber) {
	const can1 = getCanonical(unit1), can2 = getCanonical(unit2);
	if (!can1 && !can2) {
		const canonical = unit2.dimensions.size > 0 ? unit2 : unit1;
		canonicalMap.set(unit1, canonical);
		canonicalMap.set(unit2, canonical);
		aliasMap.set(canonical, new Set([unit1, unit2]));
		return;
	}
	if (!can2) { canonicalMap.set(unit2, can1); aliasMap.get(can1).add(unit2); return }
	if (!can1) { canonicalMap.set(unit1, can2); aliasMap.get(can2).add(unit1); return }
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
	return [...(aliasMap.get(getCanonical(u)) || [])].filter(x => !!x.id);
}
export function getPrefix(name: string): EvaluatedNode {
	let res = prefixMap.get(name);
	if(!res) return undefined;
	if(!isEvaluated(res)) {
		prefixMap.delete(name);
		return evaluate(res);
	} else return res;
}
export function getUnit(name: string, {withPrefix = true} = {}): EvaluatedNode {
	if (name.endsWith("_")) {
		return getPrefix(name.substr(0, name.length - 1));
	}
	if (!unitMap.has(name)) {
		if (withPrefix) for (const prefix of prefixMap.keys()) {
			if (name.startsWith(prefix)) {
				let unit = getPrefix(prefix);
				if (prefix.length < name.length) {
					const suffix = getUnit(name.substr(prefix.length), { withPrefix: false });
					if (suffix === null) continue;
					const unitValue = evaluate(new Tree.InfixFunctionCallNode("·", [unit, suffix]));
					unit = new Tree.InfixFunctionCallNode("=", [new Tree.IdentifierNode(name), unitValue]) as EvaluatedNode;
					unit.value = unitValue.value.withIdentifier(name);
				}
				return unit;
			}
		}
		if (name[name.length - 1] === 's') return getUnit(name.substr(0, name.length - 1), { withPrefix });
		return null;
	}
	let res = unitMap.get(name);
	if(!res) return undefined;
	if(!isEvaluated(res)) {
		unitMap.delete(name);
		return evaluate(res);
	}
	else return res;
}
function stripCommentsTrim(str: string) {
	const commentStart = str.indexOf("#");
	if (commentStart >= 0) str = str.substr(0, commentStart);
	return str.trim();
}
export function parseEvaluate(str: string) {
	return evaluate(parse(stripCommentsTrim(str)));
}
function evaluate(node: Tree.Node): EvaluatedNode {
	if(isEvaluated(node)) return node;
	const evNode = node as EvaluatedNode;
	if (node instanceof Tree.NumberNode) {
		evNode.value = new UnitNumber(node.number);
	} else if (node instanceof Tree.IdentifierNode) {
		evNode.value = getUnit(node.identifier).value;
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
				setUnitOrPrefix(name.identifier, evNode, evaluate(val));
			else throw Error('invalid left hand side of =');
		} else evNode.value = getFunction(op)(...node.operands.map(evaluate).map(x => x.value));
	} else throw Error("what is " + node);
	return evNode;
}

export function define(name: string): TaggedString {
	const unit = getUnit(name);
	const t = TaggedString.t;
	const canonical = getCanonical(unit.value);
	const aliases = getAliases(unit.value);
	return (t
		`Definition: ${unit.toTaggedString()}.
${canonical ? canonical == unit.value ? "(Canonical form)" : t`Canonical Form: ${canonical}` : ""} 

${aliases && aliases.length > 0 ? TaggedString.t`Aliases: ${TaggedString.join(aliases, ", ")}` : ""}`
	);
}
function unitConvertedTaggedString(node: Tree.Node) {
	if(node instanceof Tree.FunctionCallNode && node.fnname === 'to') {
		const unit = evaluate(node.operands[1]);
		const numericValue = evaluate(node.operands[0]).value.div(unit.value);
		return TaggedString.t`${numericValue.value.toString()} ${unit.toTaggedString()}`;
	}
	else return evaluate(node).value.toTaggedString();
}
export async function qalculate(input: string): Promise<TaggedString> {
	const ret = parseEvaluate(input);
	if (ret.value.id) return define(ret.value.id);
	return TaggedString.t`${ret.toTaggedString()} = ${unitConvertedTaggedString(ret)}`;
}

loadUnits("units_data.txt", gnuUnitsData);
loadUnits("custom_data.txt", customData);