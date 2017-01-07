"use strict";
const dir = "./gnu-units-2.12";
const output = process.argv[2];
if(!output) throw Error("specify output file");

import * as fs from "fs";

import {CategorizeStore} from './GnuUnitsCategorizeHelper';
const vars: {[name: string]: any} = {};
const ignoring: boolean[] = [];
let lineCache = "";
import * as steps from "../data/gnu-units-categorize-steps.json";

function parseLine(line: string): any[] {
	if (line.endsWith("\\")) {
		lineCache += line.substr(0, line.length - 1);
		return [];
	} else {
		line = lineCache + line;
		lineCache = "";
	}
	const commentStart = line.indexOf('#');
	if (commentStart >= 0) line = line.substr(0, commentStart);
	line = line.trim();
	if (line.length === 0) return [];
	if (line.startsWith("!")) {
		const [command, ...args] = line.substr(1).trim().split(/\s+/g);
		if (!command.startsWith("end") && ignoring.some(v => v)) return [];
		const commands: {[name: string]: (...args: any[]) => void} = {
			'include': fname => parseFile(dir + "/" + fname),
			'utf8': () => null,
			'endutf8': () => null,
			'var': (variable, ...value) => {ignoring.push(value.every(v => vars[variable] != v))},
			'varnot': (variable, ...value) => {ignoring.push(value.some(v => vars[variable] == v))},
			'endvar': () => {ignoring.pop()},
			'message': (...args) => console.warn(args.join(" ")),
			'set': (variable, value) => {vars[variable] = value},
			'locale': (locale) => {ignoring.push(locale !== 'en_US')},
			'endlocale': () => {ignoring.pop()},
			'unitlist': () => null,
		};
		const cmd = commands[command];
		//console.warn("executing", command, args);
		if (!cmd) throw Error("unknown command " + command);
		return cmd(...args) || [];
	}
	if (ignoring.some(v => v)) return [];
	const firstSpace = line.search(/\s/);
	let [variable, value] = [line.substr(0, firstSpace), line.substr(firstSpace).trim()];
	if (value.startsWith("!")) {
		if (value === '!') return [variable + "!"];
		else if (value === '!dimensionless') return [variable + " = 1"];
		else throw Error("invalid value: " + value);
	}
	if (variable.endsWith("-")) variable = variable.replace(/-$/, "_");
	if (variable === 'to') return [];
	value = value.replace(/\bper\b/g, "/").replace(/([^0-9])([a-z]+)([2-9])\b([^(]|$)/g, "$1$2^$3$4");
	const fnCall = variable.match(/(.*)\((.*)\)/);
	if(fnCall) {
		//console.warn("\t"+variable+ " = " +value);
		const [_, fnName, argName] = fnCall;
		if(argName === "") return [fnName + " = " + value];
		else {
			const [fn, inverseFn] = value.replace(/^((units=|range=|domain=)\S+\s+)+/, "").split(";");
			const res = [`${fnName} = ${argName} => ${fn}`];
			if(inverseFn) res.push(`${fnName}^-1 = ${fnName} => ${inverseFn.trim()}`);
			return res;
		}
	}
	return [variable + " = " + value];
}

function parseFile(fname: string): any[] {
	const file = fs.readFileSync(fname, "utf-8");
	const categoryStore = new CategorizeStore(file, fname.endsWith("definitions.units") ? steps : []);
	const all = [];
	for (let i = 0; i < categoryStore.lines.length; i++) {
		const line = categoryStore.lines[i];
		const parsed = parseLine(line);
		for(const res of parsed) {
			if(typeof res === "string")
				all.push({line: res, info: categoryStore.categoryTreeOf(i)});
			else all.push(res);
		}
	}
	return all;
}
console.log("# source: GNU Units");
const res = parseFile(dir + "/definitions.units");
fs.writeFileSync(output, JSON.stringify(res));
