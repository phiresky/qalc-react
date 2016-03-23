import * as mathjs from 'mathjs';
import {Unit, BaseUnit, UnitIdentifier} from './henning';
const parser = mathjs.parser();

declare var fetch: any;
let loadUnits: Promise<void> = fetch('qalc_data.txt').then((d: any) => d.text()).then((t: string) => {
	let lines = t.split("\n"), linesNew: string[] = [];
	let errors:any[] = [];
	while(true) {
		errors = [];
		lines.forEach(line => {
			try {parseEvaluate(line)} catch(error) {
				linesNew.push(line);
				errors.push({line, error});
			}
		});
		if(linesNew.length === lines.length) {
			console.error("Could not resolve all errors, remaining: ");
			console.log(lines);
			break;
		}
		lines = linesNew;
		linesNew = [];
		
	}
	errors.forEach(l => console.warn(l));
});

function mathjs_hack_unicode(str: string) {
	if(/[a-z0-9]+/i.test(str)) return str;
	else return "_unicode_"+encodeURIComponent(str).replace(/%/g, "_");
}
function unmathjs_hack_unicode(str: string) {
	if(str.startsWith("_unicode_")) return decodeURIComponent(str.substr(9).replace(/_/g, "%"));
	return str;
}
const unitMap: Map<string, Unit> = new Map();

function getUnit(name: string) {
	if(!unitMap.has(name)) {
		throw Error("unknown unit: " + name);
	}
	return unitMap.get(name);
}
function evaluate(node: mathjs.MathNode): Unit {
	switch (node.type) {
		case 'OperatorNode': {
			const {op, args}:{op:string, args:mathjs.MathNode[]} = node as any;	
			const stuff = args.map(a => evaluate(a));
			if(args.length !== 2) {
				if(args.length === 1 && op === '-') {
					stuff.unshift(Unit.getDimensionless().mul(0));
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
			return Unit.getDimensionless().mul(parseFloat(val));
		}
		case 'SymbolNode': {
			const name = unmathjs_hack_unicode(node.name);
			if(!isNaN(parseFloat(name)) || name == "NaN") return Unit.getDimensionless().mul(parseFloat(name));
			return getUnit(name);
		}
		case 'AssignmentNode': {
			const {index, object, value} = node as any;
			if(index != null) throw Error("unsupported1");
			if(object.type !== 'SymbolNode') throw Error('unsupported2');
			const name = object.name;
			if(unitMap.has(name)) throw Error("duplicate: "+name);
			const unit = evaluate(value).withIdentifier(name);
			unitMap.set(name, unit);
			return unit;
		}
		case 'ParenthesisNode': {
			return evaluate((node as any).content);
		}
		default: throw Error("dont know about " + node.type);
	}
}
function parseEvaluate(str: string) {
	str = str.replace(/≈/g, function(x) {
		console.warn("ignoring approx. equals sign");
		return "=";
	}).replace(/(\W)in(\W)/g, function(all, before, after) {
		return before + "inch" + after;
	});
	const commentStart = str.indexOf("#");
	if (commentStart >= 0) str = str.substr(0, commentStart);
	str = str.trim();
	if(str.endsWith(".")) {
		// define new unit for a new dimension
		const name = unmathjs_hack_unicode(str.substr(0, str.length - 1));
		if(unitMap.has(name)) throw Error("duplicate: "+name);
		unitMap.set(name, new BaseUnit(new UnitIdentifier(name, name)));
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

(window as any).qalc = {unitMap, qalculate, parseEvaluate};