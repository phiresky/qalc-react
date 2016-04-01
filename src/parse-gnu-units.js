"use strict";
const dir = "./gnu-units-2.12";
const fs = require('fs');

const vars = {};
const ignoring = [];
let lineCache = "";
function parseLine(line) {
	if (line.endsWith("\\")) {
		lineCache += line.substr(0, line.length - 1);
		return;
	} else {
		line = lineCache + line;
		lineCache = "";
	}
	const commentStart = line.indexOf('#');
	if (commentStart >= 0) line = line.substr(0, commentStart);
	line = line.trim();
	if (line.length === 0) return;
	if (line.startsWith("!")) {
		const [command, ...args] = line.substr(1).trim().split(/\s+/g);
		if (!command.startsWith("end") && ignoring.some(v => v)) return;
		const commands = {
			'include': fname => parseFile(dir + "/" + fname),
			'utf8': () => null,
			'endutf8': () => null,
			'var': (variable, ...value) => ignoring.push(value.every(v => vars[variable] != v)),
			'varnot': (variable, ...value) => ignoring.push(value.some(v => vars[variable] == v)),
			'endvar': () => ignoring.pop(),
			'message': (...args) => console.warn(args.join(" ")),
			'set': (variable, value) => vars[variable] = value,
			'locale': (locale) => ignoring.push(locale !== 'en_US'),
			'endlocale': () => ignoring.pop(),
			'unitlist': () => null,
		};
		const cmd = commands[command];
		//console.warn("executing", command, args);
		if (!cmd) throw Error("unknown command " + command);
		cmd(...args);
		//console.warn(ignoring);
		return;
	}
	if (ignoring.some(v => v)) return;
	const firstSpace = line.search(/\s/);
	let [variable, value] = [line.substr(0, firstSpace), line.substr(firstSpace).trim()];
	if (value.startsWith("!")) {
		if (value === '!') console.log(variable + "!");
		else if (value === '!dimensionless') console.log(variable + " = 1");
		else throw Error("invalid value: " + value);
		return;
	}
	if (variable.endsWith("-")) variable = variable.replace(/-$/, "_");
	if (variable === 'to') return;
	value = value.replace(/\bper\b/g, "/").replace(/([^0-9])([a-z]+)([2-9])\b([^(]|$)/g, "$1$2^$3$4");
	const fnCall = variable.match(/(.*)\((.*)\)/);
	if(fnCall) {
		//console.warn("\t"+variable+ " = " +value);
		const [_, fnName, argName] = fnCall;
		if(argName === "") console.log(fnName + " = " + value);
		else {
			const [fn, inverseFn] = value.replace(/^((units=|range=|domain=)\S+\s+)+/, "").split(";");
			console.log(`${fnName} = ${argName} => ${fn}`);
			if(inverseFn) console.log(`${fnName}^-1 = ${fnName} => ${inverseFn.trim()}`);
		}
		return;
	}
	console.log(variable + " = " + value);
}

function parseFile(file) {
	const lines = fs.readFileSync(file, "utf8").split("\n");
	for (const line of lines) parseLine(line);
}
console.log("# source: GNU Units");
parseFile(dir + "/definitions.units");
