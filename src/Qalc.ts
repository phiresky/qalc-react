import {UnitNumber, TaggedString} from './unitNumber';
import {parse, Token, TokenType} from './parser';

import gnuUnitsData from '../units_data.txt!text';
import customData from '../custom_data.txt!text';

declare var fetch: any;
const loadUnits = (t: string) => {
	const lines = t.split("\n");
	for(let i = 0; i < lines.length; i++) {
		try {
			const line = stripCommentsTrim(lines[i]);
			if(line.length === 0) continue;
			if(checkDefineBaseUnit(line)) continue;
			if(line.indexOf("=") >= 0 && line.split("=")[0].search(/[\(\[]/) >= 0) continue;
			const tokens = [...parse(line)];
			const lastOp = tokens[tokens.length - 1];
			if(lastOp.type === TokenType.Operator && lastOp.str === '=' && tokens[0].type==TokenType.Identifier) {
				const name = tokens[0].str;
				if(name.endsWith("_")) {
					const prefixName = name.substr(0, name.length - 1);
					prefixMap.set(prefixName, () => evaluate(tokens));
				} else {
					setUnit(name, () => evaluate(tokens));
				}
			} else evaluate(tokens);
		} catch(e) {
			console.error(lines[i], e);
		}
	}
	// force evaluate all units
	for(const name of unitMap.keys()) {
		try {getUnit(name);}catch(e) {console.error(e);}
	}
};
export const unitMap: Map<string, UnitNumber|(() => UnitNumber)> = new Map();
export const prefixMap: Map<string, UnitNumber|(() => UnitNumber)> = new Map();
export const canonicalMap: Map<UnitNumber, UnitNumber> = new Map();
export const aliasMap: Map<UnitNumber, Set<UnitNumber>> = new Map();

const functions = new Map<string, (arg: UnitNumber) => UnitNumber>([
	["sqrt", num => num.pow(0.5)],
	["ln", num => {num.dimensions.assertEmpty("argument of ln()"); return new UnitNumber(num.value.ln())}],
	["delete", num => {return unitMap.delete(num.id)? new UnitNumber(1):new UnitNumber(0)}],
	["log2", num => {num.dimensions.assertEmpty(); return new UnitNumber(num.value.logarithm(2))}],
	["exp", num => {num.dimensions.assertEmpty(); return new UnitNumber(num.value.exp())}],
	["tan", num => {num.dimensions.assertEmpty(); return new UnitNumber(Math.tan(num.value.toNumber()))}],
	["log", num => {num.dimensions.assertEmpty(); return new UnitNumber(num.value.logarithm(10))}]
]);
function setUnit(name: string, val: (UnitNumber|(()=>UnitNumber))) {
	if(unitMap.has(name)) throw Error("duplicate: "+name);
	unitMap.set(name, val);
}
function deleteUnit(name: string) {
	const unit = getUnit(name);
	const aliases = aliasMap.get(getCanonical(unit));
	if(aliases) aliases.delete(unit);
	return unitMap.delete(name);
}
function setUnitOrPrefix(name: string, unit:UnitNumber) {
	let oldUnit: UnitNumber;
	[unit, oldUnit] = [unit.withIdentifier(name), unit];
	unifyAliases(unit, oldUnit);
	if(name.endsWith("_")) {
		const prefixName = name.substr(0, name.length - 1);
		prefixMap.set(prefixName, unit);
	} else {
		setUnit(name, unit);
	}
	return unit;
}
function unifyAliases(unit1: UnitNumber, unit2: UnitNumber) {
	const can1 = getCanonical(unit1), can2 = getCanonical(unit2);
	if(!can1 && !can2) {
		const canonical = unit2.dimensions.size > 0 ? unit2 : unit1;
		canonicalMap.set(unit1, canonical);
		canonicalMap.set(unit2, canonical);
		aliasMap.set(canonical, new Set([unit1, unit2]));
		return;
	}
	if(!can2) {canonicalMap.set(unit2, can1);aliasMap.get(can1).add(unit2); return}
	if(!can1) {canonicalMap.set(unit1, can2);aliasMap.get(can2).add(unit1); return}
	throw Error("unity error, can. form ex. for both "+unit1+" and "+unit2+":"+can1+" and "+can2);
}
export function getCanonical(u: UnitNumber) {
	while(true) {
		let u2 = canonicalMap.get(u);
		if(!u2) return u2;
		if(u2 === u) return u;
		u = u2;
	}
}
export function getAliases(u: UnitNumber) {
	return [...(aliasMap.get(getCanonical(u))||[])].filter(x => !!x.id);
}
export function getPrefix(name: string) {
	let pref = prefixMap.get(name) as any;
	if(typeof pref === "function") pref = pref();
	return pref;
}
export function getUnit(name: string, {withPrefix = true, canonical = false} = {}): UnitNumber {
	if(name.endsWith("_")) {
		return getPrefix(name.substr(0, name.length - 1));
	}
	if(!unitMap.has(name)) {
		if(withPrefix) for(const prefix of prefixMap.keys()) {
			if(name.startsWith(prefix)) {
				let unit = getPrefix(prefix);
				if(canonical) unit = getCanonical(unit);
				if(prefix.length < name.length) {
					const suffix = getUnit(name.substr(prefix.length), {withPrefix: false, canonical});
					if(suffix === null) continue;
					unit = unit.mul(suffix).withIdentifier(name);
				}
				return unit;
			}
		}
		if(name[name.length-1] === 's') return getUnit(name.substr(0, name.length - 1), {canonical, withPrefix});
		return null;
	}
	let res = unitMap.get(name) as any;
	if(typeof res === "function") {
		unitMap.delete(name);
		res = res();
	}
	if(res && canonical) res = getCanonical(res);
	return res;
}
function interpretVal(v: string|UnitNumber): UnitNumber {
	if(typeof v === 'string') {
		const u = getUnit(v);
		if(u === null) throw Error("can't resolve unit: " + v);
		return u;
	} else return v;
}
function stripCommentsTrim(str: string) {
	const commentStart = str.indexOf("#");
	if (commentStart >= 0) str = str.substr(0, commentStart);
	return str.trim();
}
function checkDefineBaseUnit(str: string) {
	if(str[str.length-1] === "!") {
		// define new unit for a new dimension
		const name = str.substr(0, str.length - 1);
		const unit = UnitNumber.createBaseUnit(name);
		setUnit(name, unit);
		return unit;
	}	
	return null;
}
export function parseEvaluate(str: string) {
	str = stripCommentsTrim(str);
	if(checkDefineBaseUnit(str)) return;
	if(str.length === 0) return new UnitNumber(NaN);
	return evaluate(parse(str));
}
function evaluate(reversePolishNotation: Iterable<Token>) {
	const stack: (string|UnitNumber)[] = [];
	const tokens = reversePolishNotation;
	for(const token of tokens) {
		if(token.type === TokenType.Operator) {
			const op = token.str.trim();
			const map:any = {'*':'mul', '':'mul', '/':'div','|':'div', '^':'pow','+':'plus','-':'minus', 'to':'convertTo'};
			if(op === '#') stack.push(interpretVal(stack.pop()).mul(new UnitNumber(-1)));
			else if(op === '=' || op === '≈') {
				const val = interpretVal(stack.pop()), name = stack.pop() as string;
				if(typeof name !== 'string') throw Error('invalid left hand side of =');
				stack.push(setUnitOrPrefix(name, val));
			}
			else {
				const r = interpretVal(stack.pop()), l = interpretVal(stack.pop());
				stack.push((l as any)[map[op]](r));
			}
		}
		else if(token.type === TokenType.Number) stack.push(new UnitNumber(token.str));
		else if(token.type === TokenType.Identifier) stack.push(token.str);
		else if(token.type === TokenType.FunctionCall) {
			if(!functions.has(token.str)) throw Error('unknown function '+token.str);
			const fnFunction = functions.get(token.str);
			stack.push(fnFunction(interpretVal(stack.pop())));
		}
		else throw Error("unknown token type "+token.type);
	}
	if(stack.length !== 1) {
		console.warn(stack);
		throw Error("Stack error");
	}
	return interpretVal(stack[0]);
}
export function define(unit: UnitNumber): TaggedString {
	const t = TaggedString.t;
	const canonical = getCanonical(unit);
	const aliases = getAliases(unit);
	return (t
`Definition: ${unit.toTaggedDefinition()}.
${canonical?canonical==unit?"(Canonical form)":t`Canonical Form: ${canonical}`:""} 

${aliases&&aliases.length>0?TaggedString.t`Aliases: ${TaggedString.join(aliases, ", ")}`:""}`
	);
}
export async function qalculate(input: string): Promise<TaggedString> {
	const ret = parseEvaluate(input);
	if(ret.id) return define(ret);
	return TaggedString.t`= ${ret.toTaggedDefinition()} = ${ret.toTaggedString()}`;
}

loadUnits(gnuUnitsData);
loadUnits(customData);