import * as mathjs from 'mathjs';
import {Unit, BaseUnit, UnitIdentifier} from './henning';
const parser = mathjs.parser();

declare var fetch: any;
let loadUnits: Promise<void> = fetch('qalc_data.txt').then((d: any) => d.text()).then((t: string) => t.split("\n")
.forEach(line => {
	try {parseEvaluate(line) } catch(e) {console.log(line); console.warn(e);}
}))
.then(() => Object.keys(missingUnits).forEach(n => console.warn("Missing unit: "+n)));

function mathjs_hack_unicode(str: string) {
	if(/[a-z0-9]+/i.test(str)) return str;
	else return "_unicode_"+encodeURIComponent(str).replace(/%/g, "_");
}
function unmathjs_hack_unicode(str: string) {
	if(str.startsWith("_unicode_")) return decodeURIComponent(str.substr(9).replace(/_/g, "%"));
	return str;
}
const unitMap: Map<string, Unit> = new Map();
const missingUnits: {[name:string]: boolean} = {};

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
			const funs:{[op:string]:string} = {'*':'mul', '/':'div','^':'pow','+':'plus','-':'minus'};
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
			if(!unitMap.has(name)) {
				missingUnits[name] = true;
				unitMap.set(name, new BaseUnit(new UnitIdentifier(name, name)));
			}
			return unitMap.get(name);
		}
		case 'AssignmentNode': {
			const {index, object, value} = node as any;
			if(index != null) throw Error("unsupported1");
			if(object.type !== 'SymbolNode') throw Error('unsupported2');
			const name = object.name;
			if(!missingUnits[name] && unitMap.has(name)) throw Error("duplicate: "+name);
			delete missingUnits[name];
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
function newUnit(name: string) {
	
}
function parseEvaluate(str: string) {
	str = str.replace(/≈/g, function(x) {
		console.warn("ignoring approx. equals sign");
		return "=";
	})
	const commentStart = str.indexOf("#");
	if (commentStart >= 0) str = str.substr(0, commentStart);
	str = str.trim();
	if(str.endsWith(".")) {
		// define new unit for a new dimension
		const name = unmathjs_hack_unicode(str.substr(0, str.length - 1));
		if(!missingUnits[name] && unitMap.has(name)) throw Error("duplicate: "+name);
		unitMap.set(name, new BaseUnit(new UnitIdentifier(name, name)));
		delete missingUnits[name];
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

(window as any).qalc = {unitMap, qalculate, parseEvaluate, missingUnits};