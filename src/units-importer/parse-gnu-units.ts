"use strict";
const dir = "./units-2.12";
const output = process.argv[2];
if (!output) throw Error("specify output file");

import * as fs from "fs";
import * as steps from "../../data/gnu-units-categorize-steps.json";
import CategorizeStore from "./CategorizeStore";

const vars: { [name: string]: any } = {};
const ignoring: boolean[] = [];
let lineCache = "";

type Line = string;
function parseLine(line: string): (Line | ELine)[] {
	if (line.endsWith("\\")) {
		lineCache += line.substr(0, line.length - 1);
		return [];
	} else {
		line = lineCache + line;
		lineCache = "";
	}
	const commentStart = line.indexOf("#");
	if (commentStart >= 0) line = line.substr(0, commentStart);
	line = line.trim();
	if (line.length === 0) return [];

	// special case hacks
	if (line.startsWith("grit_ansicoated")) return [];
	if (line.startsWith("grit_ansibonded")) return [];
	line = line.replace("saotome&", "saotomeand");

	if (line.startsWith("!")) {
		const [command, ...args] = line.substr(1).trim().split(/\s+/g);
		if (!command.startsWith("end") && ignoring.some((v) => v)) return [];
		const commands: {
			[name: string]: (...args: any[]) => ELine[] | void;
		} = {
			include: (fname) => parseFile(dir + "/" + fname),
			utf8: () => {
				/** noop */
			},
			endutf8: () => {
				/** noop */
			},
			var: (variable, ...value) => {
				ignoring.push(value.every((v) => vars[variable] != v));
			},
			varnot: (variable, ...value) => {
				ignoring.push(value.some((v) => vars[variable] == v));
			},
			endvar: () => {
				ignoring.pop();
			},
			message: (...args) => console.warn(args.join(" ")),
			set: (variable, value) => {
				vars[variable] = value;
			},
			locale: (locale) => {
				ignoring.push(locale !== "en_US");
			},
			endlocale: () => {
				ignoring.pop();
			},
			unitlist: () => {
				/** noop */
			},
		};
		const cmd = commands[command];
		//console.warn("executing", command, args);
		if (!cmd) throw Error("unknown command " + command);

		return cmd(...args) || [];
	}
	if (ignoring.some((v) => v)) return [];
	const firstSpace = line.search(/\s/);
	let [variable, value] = [
		line.substr(0, firstSpace),
		line.substr(firstSpace).trim(),
	];
	if (value.startsWith("!")) {
		if (value === "!") return [variable + "!"];
		else if (value === "!dimensionless") return [variable + " = 1"];
		else throw Error("invalid value: " + value);
	}
	// ignore mapped functions
	if (variable.search(/[[]/) >= 0) return [];
	if (variable.endsWith("-")) variable = variable.replace(/-$/, "_");
	if (variable === "to" || value.match(/\bto\b/)) {
		console.warn("skipping", line);
		return [];
	}
	value = value
		.replace(/\bper\b/g, "/")
		.replace(/([^0-9])([a-z]+)([2-9])\b([^(]|$)/g, "$1$2^$3$4");
	const fnCall = variable.match(/(.*)\((.*)\)/);
	if (fnCall) {
		//console.warn("\t"+variable+ " = " +value);
		const [, fnName, argName] = fnCall;
		if (argName === "") return [fnName + " = " + value];
		else {
			const [fn, inverseFn] = value
				.replace(/^((units=|range=|domain=)\S+\s+)+/, "")
				.split(";");
			const res = [`${fnName} = ${argName} => ${fn}`];
			if (inverseFn)
				res.push(`${fnName}^-1 = ${fnName} => ${inverseFn.trim()}`);
			return res;
		}
	}
	return [variable + " = " + value];
}
type Info = { headings: string[]; comment: string };
type ELine = { line: Line; info: Info };
function parseFile(fname: string): ELine[] {
	const file = fs.readFileSync(fname, "utf-8");
	const categoryStore = new CategorizeStore(
		file,
		fname.endsWith("definitions.units") ? steps : [],
	);
	const all: { line: Line; info: Info }[] = [];
	for (let i = 0; i < categoryStore.lines.length; i++) {
		const line = categoryStore.lines[i];
		const parsed = parseLine(line);
		for (const res of parsed) {
			if (typeof res === "string")
				all.push({ line: res, info: categoryStore.categoryTreeOf(i) });
			else all.push(res);
		}
	}
	return all;
}
console.log("# source: GNU Units");
const res = parseFile(dir + "/definitions.units");
fs.writeFileSync(output, JSON.stringify(res, null, "\t"));
