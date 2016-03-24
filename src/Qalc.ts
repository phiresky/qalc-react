import * as mathjs from 'mathjs';
import {UnitNumber} from './unitNumber';

import qalcData from '../qalc_data.txt!text';
const parser = mathjs.parser();

declare var fetch: any;
let loadUnits: Promise<void> = Promise.resolve(qalcData).then((t: string) => {
	let lines = t.split("\n").map((line, index) => ({line, index})), linesNew:typeof lines = [];
	let errors:any[] = [];
	let iteration = 0;
	while(true) {
		lines.forEach(line => {
			try {parseEvaluate(line.line)} catch(error) {
				linesNew.push(line);
				errors[line.index] = errors[line.index] || [];
				errors[line.index].push({line, error});
			}
		});
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

function mathjs_hack_unicode(str: string) {
	if(/[a-z0-9]+/i.test(str)) return str;
	else return "_unicode_"+encodeURIComponent(str).replace(/%/g, "_");
}
function unmathjs_hack_unicode(str: string) {
	if(str.startsWith("_unicode_")) return decodeURIComponent(str.substr(9).replace(/_/g, "%"));
	return str;
}
const unitMap: Map<string, UnitNumber> = new Map();
const prefixMap: Map<string, UnitNumber> = new Map();
const caseInsensitives: {[v:string]: boolean} = {};

const functions = new Map<string, (arg: UnitNumber) => UnitNumber>([
	["sqrt", num => num.pow(0.5)]
]);
function setUnit(name: string, val: UnitNumber) {
	name = normalizeUnitName(name);
	if(unitMap.has(name)) throw Error("duplicate: "+name);
	unitMap.set(name, val);
}
function normalizeUnitName(name: string) {
	//if(name.length > 1 && !caseInsensitives[name]) name = name.toLowerCase();
	return name;
}
function getUnit(name: string): UnitNumber {
	if(!unitMap.has(normalizeUnitName(name))) {
		for(const prefix of prefixMap.keys()) {
			if(name.startsWith(prefix)) {
				return prefixMap.get(prefix).mul(getUnit(name.substr(prefix.length))).withIdentifier(name);
			}
		}
		throw Error("unknown unit: " + name);
	}
	return unitMap.get(normalizeUnitName(name));
}
function evaluate(node: mathjs.MathNode): UnitNumber {
	switch (node.type) {
		case 'OperatorNode': {
			const {op, args}:{op:string, args:mathjs.MathNode[]} = node as any;	
			const stuff = args.map(a => evaluate(a));
			if(args.length !== 2) {
				if(args.length === 1 && op === '-') {
					stuff.unshift(new UnitNumber(0));
				} else {
					throw Error("weird op "+op);
				}
			}
			const funs:{[op:string]:string} = {'*':'mul', '/':'div','^':'pow','+':'plus','-':'minus', 'to':'convertTo'};
			if(op in funs && funs[op] in stuff[0]) return (stuff[0] as any)[funs[op]](stuff[1]);
			else throw Error("unknown op "+op+" | "+stuff);
		}
		case 'ConstantNode': {
			const val = node.value;
			if((node as any).valueType !== "number") throw Error("wat is "+(node as any).valueType);
			return new UnitNumber(parseFloat(val));
		}
		case 'SymbolNode': {
			const name = unmathjs_hack_unicode(node.name);
			if(!isNaN(parseFloat(name)) || name == "NaN") return new UnitNumber(parseFloat(name));
			return getUnit(name);
		}
		case 'AssignmentNode': {
			const {index, object, value} = node as any;
			if(index != null) throw Error("unsupported1");
			if(object.type !== 'SymbolNode') throw Error('unsupported2');
			const name:string = object.name;
			let unit: UnitNumber;
			if(name.endsWith("_")) {
				const prefixName = name.substr(0, name.length - 1);
				unit = evaluate(value);
				prefixMap.set(prefixName, unit);
			} else {
				unit = evaluate(value).withIdentifier(name);
				setUnit(name, unit);
			}
			return unit;
		}
		case 'ParenthesisNode': {
			return evaluate((node as any).content);
		}
		case 'FunctionNode': {
			const {fn, args}:{fn:mathjs.MathNode, args: mathjs.MathNode[]} = node as any;
			if(fn.type !== 'SymbolNode') throw Error("can't call "+fn.type);
			if(!functions.has(fn.name)) throw Error('unknown function '+fn.name);
			const fnFunction = functions.get(fn.name);
			if(args.length !== 1) throw Error('function must have 1 argument');
			const arg = evaluate(args[0]);
			return fnFunction(arg);
		}
		default: throw Error("dont know about " + node.type);
	}
}
function parseEvaluate(str: string) {
	str = str.replace(/≈/g, function(x) {
		//TODO: console.warn("ignoring approx. equals sign");
		return "=";
	}).replace(/(\W)in(\W)/g, function(all, before, after) {
		return before + "inch" + after;
	}).replace(/c:([^ ]+)/g, function(a, variable) {
		caseInsensitives[variable] = true;
		return variable;
	});
	const commentStart = str.indexOf("#");
	if (commentStart >= 0) str = str.substr(0, commentStart);
	str = str.trim();
	if(str[str.length-1] === ".") {
		// define new unit for a new dimension
		const name = unmathjs_hack_unicode(str.substr(0, str.length - 1));
		setUnit(name, UnitNumber.createBaseUnit(name));
	} else {
		return evaluate(mathjs.parse(str));
	}
}

export async function qalculate(input: string): Promise<string> {
	await loadUnits;
	try {
		return parseEvaluate(input).toString();
	} catch (e) {
		return e + "";
	}
}

if(typeof window !== "undefined") (window as any).qalc = {unitMap, qalculate, parseEvaluate, evaluate};