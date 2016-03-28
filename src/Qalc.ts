import {UnitNumber, TaggedString} from './unitNumber';
import * as rr from './parser';

import qalcData from '../units_data.txt!text';
declare var fetch: any;
let loadUnits = (t: string) => {
	let lines = t.split("\n").map((line, index) => ({line, index})), linesNew:typeof lines = [];
	let errors:any[] = [];
	let iteration = 0;
	while(true) {
		for(const line of lines) {
			try {parseEvaluate(line.line)} catch(error) {
				linesNew.push(line);
				errors[line.index] = errors[line.index] || [];
				errors[line.index].push({line, error});
			}
		}
		if(linesNew.length === lines.length) {
			console.error("Could not resolve all errors, remaining: ");
			console.log(lines);
			break;
		}
		lines = linesNew;
		linesNew = [];
		iteration++;
	}
	errors.forEach((l,i) => {
		if(l.length >= iteration) console.warn(i, l);
	});
};
export const unitMap: Map<string, UnitNumber> = new Map();
export const prefixMap: Map<string, UnitNumber> = new Map();
export const canonicalMap: Map<UnitNumber, UnitNumber> = new Map();
export const aliasMap: Map<UnitNumber, Set<UnitNumber>> = new Map();

const functions = new Map<string, (arg: UnitNumber) => UnitNumber>([
	["sqrt", num => num.pow(0.5)],
	["ln", num => {num.dimensions.assertEmpty("argument of ln()"); return new UnitNumber(num.value.ln())}],
]);
function setUnit(name: string, val: UnitNumber) {
	name = normalizeUnitName(name);
	if(unitMap.has(name)) throw Error("duplicate: "+name);
	unitMap.set(name, val);
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
function normalizeUnitName(name: string) {
	//if(name.length > 1 && !caseInsensitives[name]) name = name.toLowerCase();
	return name;
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
export function getUnit(name: string, {withPrefix = true, canonical = false} = {}): UnitNumber {
	if(name.endsWith("_")) {
		return prefixMap.get(name.substr(0, name.length - 1));
	}
	if(!unitMap.has(normalizeUnitName(name))) {
		if(withPrefix) for(const prefix of prefixMap.keys()) {
			if(name.startsWith(prefix)) {
				let unit = prefixMap.get(prefix);
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
	let res = unitMap.get(normalizeUnitName(name));
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
export function parseEvaluate(str: string) {
	if(str.indexOf("=") >= 0 && str.split("=")[0].search(/\(/) >= 0) return null;
	const commentStart = str.indexOf("#");
	if (commentStart >= 0) str = str.substr(0, commentStart);
	str = str.trim();
	if(str[str.length-1] === "!") {
		// define new unit for a new dimension
		const name = str.substr(0, str.length - 1);
		const unit = UnitNumber.createBaseUnit(name);
		setUnit(name, unit);
		return unit;
	}	
	if(str.length === 0) return new UnitNumber(NaN);
	const stack: (string|UnitNumber)[] = [];
	const tokens = rr.parse(str);
	for(const token of tokens) {
		if(token.type === rr.TokenType.Operator) {
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
		else if(token.type === rr.TokenType.Number) stack.push(new UnitNumber(token.str));
		else if(token.type === rr.TokenType.Identifier) stack.push(token.str);
		else if(token.type === rr.TokenType.FunctionCall) {
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
	const canonical = getCanonical(unit);
	const pc = canonical && canonical !== unit;
	const aliases = getAliases(unit);
	return (TaggedString.t
`Definition: ${unit.toString()} = ${unit.toTaggedStringDefinition()}${pc?" = ":""}${pc?canonical:""}.


${aliases&&aliases.length>0?TaggedString.t`Aliases: ${TaggedString.join(aliases, ", ")}`:""}`
	);
}
export async function qalculate(input: string): Promise<TaggedString> {
	const ret = parseEvaluate(input);
	if(ret.id) return define(ret);
	return ret.toTaggedStringDefinition();
}

loadUnits(qalcData);