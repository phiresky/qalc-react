import { UnitNumber, SpecialUnitNumber } from "../unitNumber";
import { parse, RPNToken, AToken } from "./parser";
import Scope from "./scope";
import { TaggedString } from "../output";
import * as Tree from "./Tree";
import * as parser from "./parser";
import * as operators from "./operators";
import globalScope from "./globalScope";
import init from "./init";

type EvaluatedNode = Tree.EvaluatedNode;

import { applyFunction } from "./functions";

export function stripCommentsTrim(str: string) {
	const commentStart = str.indexOf("#");
	if (commentStart >= 0) str = str.substr(0, commentStart);
	return str.trim();
}

export function parseEvaluate(str: string) {
	return evaluate(parse(stripCommentsTrim(str)), globalScope);
}

export function evaluate(node: Tree.Node, scope: Scope): EvaluatedNode {
	init();
	if (Tree.isEvaluated(node)) return node;
	let evNode = node as EvaluatedNode;
	if (node instanceof Tree.NumberNode) {
		evNode.value = new UnitNumber(node.number);
	} else if (node instanceof Tree.IdentifierNode) {
		evNode.value = scope.getUnit(node.identifier)!.value;
		if (!evNode.value) throw Error("can't resolve " + node.identifier);
	} else if (node instanceof Tree.InfixFunctionCallNode) {
		const op = node.fnname;
		const fn = operators.infixOperators[op];
		if (!fn) throw Error("function not found: " + op);
		evNode.value = applyFunction(fn, node, scope);
	} else if (node instanceof Tree.UnaryFunctionCallNode) {
		const op = node.fnname;
		const fn = operators.unaryOperators[op];
		if (!fn) throw Error("function not found: " + op);
		evNode.value = applyFunction(fn, node, scope);
	} else throw Error("what is " + node.toDebugString());
	return evNode;
}

export function define(unit: EvaluatedNode, scope: Scope): TaggedString {
	console.log(unit.value);
	if (unit instanceof Tree.IdentifierNode)
		unit = scope.getUnit(unit.value.id!)!;
	const t = TaggedString.t;
	const canonical = scope.getCanonical(unit.value);
	const canonicalText = canonical
		? canonical == unit.value
			? "(Canonical form)"
			: t`Canonical Form: ${canonical.toTaggedString()}`
		: "";
	const aliases = scope.getAliases(unit.value);
	const aliasesText =
		aliases && aliases.length > 0
			? TaggedString.t`Aliases: ${TaggedString.join(
					aliases.map(a => a.value),
					", ",
				)}`
			: "";
	const info = scope.docMap.get(unit.value.id!);
	let infoText: TaggedString = t``;
	if (info) {
		infoText = t`
Documentation:
${info.comment ? "Comment: " + info.comment : ""}
${
			info.headings.length
				? "Category: \n" +
					info.headings.map(x => `"${x}"`).join("\n -> ")
				: ""
		}
`;
	}
	unit = [...aliases, unit].find(
		alternative => alternative.value.id === unit.value.id,
	)!;
	const inverse =
		unit.value instanceof SpecialUnitNumber && unit.value.inverse.fnTree;
	let inverseText = inverse ? t`Inverse:    ${inverse.toTaggedString()}` : "";
	const res = t`Definition: ${unit.toTaggedString()}.
		${inverseText}
		${canonicalText}

		${aliasesText}

		${infoText}`;
	res.flatten();
	res.vals = res.vals.map(
		x => (typeof x === "string" ? x.replace(/\n\s*/g, "\n") : x),
	);
	return res;
}
function unitConvertedTaggedString(node: Tree.Node, scope: Scope) {
	if (node instanceof Tree.FunctionCallNode && node.fnname === "to") {
		const unit = evaluate(node.operands[1], scope);
		const numericValue = evaluate(node.operands[0], scope).value.div(
			unit.value,
		);
		return TaggedString.t`${numericValue.toString()} ${unit.toTaggedString()}`;
	} else return evaluate(node, scope).value.toTaggedString();
}
export async function qalculate(input: string): Promise<TaggedString> {
	const scope = globalScope;
	if (input.trim().length === 0) return new TaggedString();
	input = stripCommentsTrim(input);
	let error = "";
	let tokens: AToken[] | null = null;
	try {
		tokens = [...parser.tokenize(input)];
	} catch (e) {
		error += e + "\n";
	}
	let preproc: AToken[] | null = null;
	if (tokens)
		try {
			preproc = [...parser.preprocess(tokens)];
		} catch (e) {
			error += e + "\n";
		}
	let rpn: RPNToken[] | null = null;
	if (preproc)
		try {
			rpn = [...parser.toRPN(preproc)];
		} catch (e) {
			error += e + "\n";
		}
	let parsed: Tree.Node | null = null;
	if (rpn)
		try {
			parsed = Tree.rpnToTree(rpn);
		} catch (e) {
			error += e + "\n";
		}
	let evaled: EvaluatedNode | null = null;
	try {
		evaled = evaluate(parsed!, scope);
	} catch (e) {
		error += e + "\n";
	}

	if (evaled && evaled.value.id) return define(evaled, scope);
	return TaggedString.t`
res = ${
		evaled
			? TaggedString.t`${evaled.toTaggedString()} = ${unitConvertedTaggedString(
					evaled,
					scope,
				)}`
			: "err"
	}
tokens = ${
		tokens ? tokens.map(t => parser.tokenToDebugString(t)).join(" ") : "err"
	}
preproc = ${
		preproc
			? preproc.map(t => parser.tokenToDebugString(t)).join(" ")
			: "err"
	}
rpn = ${rpn ? rpn.map(t => parser.tokenToDebugString(t)).join(" ") : "err"}
parsed = ${parsed ? parsed.toDebugString() : "err"}
${error ? "error = " + error : ""}`;
}
