"use strict";
const dir = "/usr/share/qalculate";
const xml2js = require('xml2js');
const fs = require('fs');

const _output = [];
function output(priority, str) {
	_output.push({priority, str, pos: _output.length});
}
const builtinValue = {
	e: Math.E,
	_unicode__CF_80: Math.PI,
	_unicode__CE_B3: 0.577215664901532860606512090082402431042159335,
	catalan: 0.915965594177219015054603514932384110774,
	i: Math.sqrt(-1),
	infinity: +Infinity,
	plus_infinity: +Infinity,
	minus_infinity: -Infinity,
	undefined: NaN
	
}
function comment(str) {
	return `  # ${str}`;
}
function assertEmpty(obj) {
	if(Object.keys(obj).length > 0) throw error("nonempty", obj);
}

function mathjs_hack_unicode(str) {
	if(/[a-z0-9]+/i.test(str)) return str;
	else return "_unicode_"+encodeURIComponent(str).replace(/%/g, "_");
}
function unmathjs_hack_unicode(str) {
	if(str.startsWith("_unicode_")) return decodeURIComponent(str.substr(9).replace(/_/g, "%"));
	return str;
}

function addStuff(stuff) {
	if(stuff.category) {
		maybeMultiple(addStuff, stuff.category);
		delete stuff.category;
	}
	if(stuff.unit) {
		maybeMultiple(addUnit, stuff.unit);
		delete stuff.unit;
	}
	if(stuff.builtin_variable) {
		maybeMultiple(v => {
			v.value = [builtinValue[parseName(v.names[0], false)[0]]];
			if(v.value[0] === undefined) throw Error("don't know "+parseName(v.names[0]));
			addVariable(v, 1);
		}, stuff.builtin_variable);
		delete stuff.builtin_variable;
	}
	if(stuff.variable) {
		maybeMultiple(addVariable, stuff.variable);
		delete stuff.variable;
	}

	delete stuff.unknown;
	if(stuff.title) delete stuff.title;
	if(stuff.$) {
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
	if(typeof title === 'string') return title;
	error(title);
}
function parseBase(base) {
	if(!base.unit || ! base.relation || !base.exponent)
		error(base);
	if(Object.keys(base).length !== 3 ) error(base);
	
	let approximate = false;
	if(typeof base.relation[0] === "object") {
		const attr = base.relation[0].$;
		base.relation = [base.relation[0]._];
		if(JSON.stringify(attr) !=='{"approximate":"true"}')
			error("unknown attr "+JSON.stringify(attr));
		approximate = !!attr.approximate;
	}
	let str = `${base.relation[0]} ${base.unit}`;;
	if(base.exponent != 1) str += `^(${base.exponent})`;
	return {approximate, str};
}

function parseName(name, join=true) {
	const list = name.split(",").map(n => {
		if(n.indexOf(":") >= 0) return n.split(":")[1];
		else return n;
	}).map(mathjs_hack_unicode);
	if(join) return list.join(" = ");
	else return list;
}

function parsePrefix(prefix) {
	let base = 10;
	if(typeof prefix === 'object') {
		if(JSON.stringify(prefix.$) !== ('{"type":"binary"}'))
			error(prefix);
		base = 2;
		prefix = prefix._;
	}
	return +prefix !== 0 ? `${base}^${prefix} `:'';
}

function parsePart(part) {
	if("unit" in part && "prefix" in part && "exponent" in part && Object.keys(part).length === 3) {
		const prefix = parsePrefix(part.prefix[0]);
		const suffix = +part.exponent[0] !== 1 ? `^${part.exponent[0]}` : '';
		return `${prefix}${part.unit[0]}${suffix}`;
	} else error(part);
	return "?";
}

function maybeMultiple(fn, arg) {
	if(arg instanceof Array) for(const a of arg) fn(a);
	else fn(arg);
}
function addUnit(unit) {
	switch(unit.$.type) {
		case 'alias': {
		if(unit.base[0].inverse_relation) {
			console.error('todo: '+parseName(unit.names[0])); return;
		}
		const {approximate, str} = parseBase(unit.base[0]);
		output(0, `${parseName(unit.names[0])} ${approximate?"≈":"="} ${str}${comment(parseTitle(unit.title[0]))}`);
		break;
	} case 'base': {
		const list = parseName(unit.names[0], false);
		const firstName = list.shift();
		output(1, `${firstName}.${comment(parseTitle(unit.title[0]))}`);
		output(0, `${list.join(" = ")} = ${firstName}`);
		break;
	} case 'composite': {
		output(0, `${parseName(unit.names[0])} = ${unit.part.map(part => `${parsePart(part)}`).join(" ")}${comment(parseTitle(unit.title[0]))}`)
		break;
	} default: {
		error("what is "+unit.$.type);
	}
	}
}

function addVariable(vaiable, priority = 0) {
	let eq = '=';
	if(typeof vaiable.value[0] === 'object') {
		if(vaiable.value[0].$.approximate) eq = '≈';
		vaiable.value[0] = vaiable.value[0]._;
	}
	output(priority, `${parseName(vaiable.names[0])} ${eq} ${vaiable.value[0]}${comment(parseTitle(vaiable.title[0]))}`);
}
xml2js.parseString(fs.readFileSync(dir+"/units.xml"), function(err, result) {
	if(err) error(err);
	addStuff(result.QALCULATE);
	xml2js.parseString(fs.readFileSync(dir+"/variables.xml"), function(err, result) {
		if(err) error(err);
		addStuff(result.QALCULATE);
		_output.sort((a,b) => b.priority - a.priority || a.pos - b.pos).forEach(({str}) => console.log(str));
	});
});