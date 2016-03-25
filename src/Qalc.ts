import {UnitNumber} from './unitNumber';
import * as rr from './parser';

import qalcData from '../units_data.txt!text';
declare var fetch: any;
let loadUnits: Promise<void> = Promise.resolve(qalcData).then((t: string) => {
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
});
const unitMap: Map<string, UnitNumber> = new Map();
const prefixMap: Map<string, UnitNumber> = new Map();

const functions = new Map<string, (arg: UnitNumber) => UnitNumber>([
	["sqrt", num => num.pow(0.5)],
	["ln", num => {num.dimensions.assertEmpty("argument of ln()"); return new UnitNumber(num.value.ln())}],
]);
function setUnit(name: string, val: UnitNumber) {
	name = normalizeUnitName(name);
	if(unitMap.has(name)) throw Error("duplicate: "+name);
	unitMap.set(name, val);
}
function setUnitOrPrefix(name: string, val:UnitNumber) {
	let unit = val;
	if(name.endsWith("_")) {
		const prefixName = name.substr(0, name.length - 1);
		prefixMap.set(prefixName, unit);
	} else {
		val = val.withIdentifier(name);
		setUnit(name, unit);
	}
	return unit;
}
function normalizeUnitName(name: string) {
	//if(name.length > 1 && !caseInsensitives[name]) name = name.toLowerCase();
	return name;
}
export function getUnit(name: string, withPrefix = true): UnitNumber {
	if(!unitMap.has(normalizeUnitName(name))) {
		if(withPrefix) for(const prefix of prefixMap.keys()) {
			if(name.startsWith(prefix)) {
				let unit = prefixMap.get(prefix);
				if(prefix.length < name.length) {
					const suffix = getUnit(name.substr(prefix.length), false);
					if(suffix === null) continue;
					unit = unit.mul(suffix);
				}
				return unit.withIdentifier(name);
			}
		}
		if(name[name.length-1] === 's') return getUnit(name.substr(0, name.length - 1), withPrefix);
		return null;
	}
	return unitMap.get(normalizeUnitName(name));
}
function interpretVal(v: string|UnitNumber): UnitNumber {
	if(typeof v === 'string') {
		const u = getUnit(v);
		if(u === null) throw Error("can't resolve unit: " + v);
		return u;
	} else return v;
}
export function parseEvaluate(str: string) {
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
export async function qalculate(input: string): Promise<string> {
	await loadUnits;
	try {
		return parseEvaluate(input).toString();
	} catch (e) {
		return e + "";
	}
}