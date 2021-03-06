"use strict";
const dir = "/usr/share/qalculate";
const xml2js = require("xml2js");
const fs = require("fs");

const _output = [];
function output(priority, str) {
	_output.push({ priority, str, pos: _output.length });
}
const builtinValue = {
	e: "2.71828182845904523536028747135266249775724709369995",
	π: "3.14159265358979323846264338327950288419716939937510",
	γ: "0.57721566490153286060651209008240243104215933593992",
	catalan: "0.915965594177219015054603514932384110774",
	i: Math.sqrt(-1),
	infinity: +Infinity,
	plus_infinity: +Infinity,
	minus_infinity: -Infinity,
	undefined: NaN,
};
function comment(str) {
	return `  # ${str}`;
}
function assertEmpty(obj) {
	if (Object.keys(obj).length > 0) throw error("nonempty", obj);
}

function addStuff(stuff) {
	if (stuff.category) {
		maybeMultiple(addStuff, stuff.category);
		delete stuff.category;
	}
	if (stuff.unit) {
		maybeMultiple(addUnit, stuff.unit);
		delete stuff.unit;
	}
	if (stuff.builtin_variable) {
		maybeMultiple((v) => {
			v.value = [builtinValue[parseName(v.names[0], false)[0]]];
			if (v.value[0] === undefined)
				throw Error("don't know " + v.names[0]);
			addVariable(v, 1);
		}, stuff.builtin_variable);
		delete stuff.builtin_variable;
	}
	if (stuff.variable) {
		maybeMultiple(addVariable, stuff.variable);
		delete stuff.variable;
	}
	if (stuff.prefix) {
		maybeMultiple(addPrefix, stuff.prefix);
		delete stuff.prefix;
	}

	delete stuff.unknown;
	if (stuff.title) delete stuff.title;
	if (stuff.$) {
		delete stuff.$.version;
		assertEmpty(stuff.$);
		delete stuff.$;
	}
	assertEmpty(stuff);
}

function error(...stuff) {
	console.error(...stuff);
	throw Error("(see above)");
}

function parseTitle(title) {
	if (typeof title === "string") return title;
	error(title);
}
function parseBase(base) {
	if (!base.unit || !base.relation || !base.exponent) error(base);
	if (Object.keys(base).length !== 3) error(base);

	let approximate = false;
	if (typeof base.relation[0] === "object") {
		const attr = base.relation[0].$;
		base.relation = [base.relation[0]._];
		if (JSON.stringify(attr) !== '{"approximate":"true"}')
			error("unknown attr " + JSON.stringify(attr));
		approximate = !!attr.approximate;
	}
	let str = `${base.relation[0]} ${base.unit}`;
	if (base.exponent != 1) str += `^(${base.exponent})`;
	return { approximate, str };
}

function parseName(name, join = true) {
	const list = name.split(",").map((n) => {
		if (n.indexOf(":") >= 0) {
			let [attributes, name] = n.split(":");
			attributes = attributes.replace(/[^Ä]/g, ""); // (/[^c]/g, "");
			if (attributes.length > 0) return attributes + ":" + name;
			else return name;
		} else return n;
	});
	if (join) return list.join(" = ");
	else return list;
}

function parsePrefix(prefix) {
	let base = 10;
	if (typeof prefix === "object") {
		if (JSON.stringify(prefix.$) !== '{"type":"binary"}') error(prefix);
		base = 2;
		prefix = prefix._;
	}
	return +prefix !== 0 ? `${base}^${prefix} ` : "";
}

function parsePart(part) {
	if (
		"unit" in part &&
		"prefix" in part &&
		"exponent" in part &&
		Object.keys(part).length === 3
	) {
		const prefix = parsePrefix(part.prefix[0]);
		const suffix = +part.exponent[0] !== 1 ? `^${part.exponent[0]}` : "";
		return `${prefix}${part.unit[0]}${suffix}`;
	} else error(part);
	return "?";
}

function maybeMultiple(fn, arg) {
	if (arg instanceof Array) for (const a of arg) fn(a);
	else fn(arg);
}
function addUnit(unit) {
	switch (unit.$.type) {
		case "alias": {
			if (unit.base[0].inverse_relation) {
				console.error("todo: " + parseName(unit.names[0]));
				return;
			}
			const { approximate, str } = parseBase(unit.base[0]);
			output(
				0,
				`${parseName(unit.names[0])} ${
					approximate ? "≈" : "="
				} ${str}${comment(parseTitle(unit.title[0]))}`,
			);
			break;
		}
		case "base": {
			const list = parseName(unit.names[0], false);
			const firstName = list.shift();
			output(1, `${firstName}!${comment(parseTitle(unit.title[0]))}`);
			output(0, `${list.join(" = ")} = ${firstName}`);
			break;
		}
		case "composite": {
			output(
				0,
				`${parseName(unit.names[0])} = ${unit.part
					.map((part) => `${parsePart(part)}`)
					.join(" ")}${comment(parseTitle(unit.title[0]))}`,
			);
			break;
		}
		default: {
			error("what is " + unit.$.type);
		}
	}
}

function addVariable(vaiable, priority = 0) {
	let eq = "=";
	if (typeof vaiable.value[0] === "object") {
		if (vaiable.value[0].$.approximate) eq = "≈";
		vaiable.value[0] = vaiable.value[0]._;
	}
	output(
		priority,
		`${parseName(vaiable.names[0])} ${eq} ${vaiable.value[0]}${comment(
			parseTitle(vaiable.title[0]),
		)}`,
	);
}
function addPrefix(prefix) {
	const base = { decimal: 10, binary: 2 }[prefix.$.type];
	if (!base) error("unknown type", prefix);
	console.log(`${prefix.name[0]}_ = ${base}^${prefix.exponent[0]}`);
	console.log(`${prefix.abbreviation[0]}_ = ${base}^${prefix.exponent[0]}`);
}
xml2js.parseString(fs.readFileSync(dir + "/units.xml"), function (err, result) {
	if (err) error(err);
	addStuff(result.QALCULATE);
	xml2js.parseString(
		fs.readFileSync(dir + "/variables.xml"),
		function (err, result) {
			if (err) error(err);
			addStuff(result.QALCULATE);
			xml2js.parseString(
				fs.readFileSync(dir + "/prefixes.xml"),
				function (err, result) {
					if (err) error(err);
					addStuff(result.QALCULATE);
					_output
						.sort(
							(a, b) => b.priority - a.priority || a.pos - b.pos,
						)
						.forEach(({ str }) => console.log(str));
				},
			);
		},
	);
});
