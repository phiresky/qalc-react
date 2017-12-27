import { UnitNumber, SpecialUnitNumber } from "../unitNumber";
import { parse } from "./parser";
import Scope from "./scope";
import { TaggedString } from "../output";
import * as Tree from "./Tree";
import * as operators from "./operators";
import globalScope from "./globalScope";
import init from "./init";

type EvaluatedNode = Tree.EvaluatedNode;

import { QalcFunction } from "./functions";

export function stripCommentsTrim(str: string) {
	const commentStart = str.indexOf("#");
	if (commentStart >= 0) str = str.substr(0, commentStart);
	return str.trim();
}

export function parseEvaluate(str: string) {
	return evaluate(parse(stripCommentsTrim(str)), globalScope);
}

export function evaluationHasSideeffect(node: Tree.Node, scope: Scope) {
	if (node instanceof Tree.FunctionCallNode) {
		const fn = resolveFunction(node, scope);
		return fn.hasSideEffects(node, scope);
	} else if (node instanceof Tree.IdentifierNode) {
		return false;
	} else if (node instanceof Tree.NumberNode) {
		return false;
	} else {
		console.error("unknown node", node);
		throw Error("unknown node");
	}
}

function resolveFunction(
	node: Tree.FunctionCallNode,
	_scope: Scope,
): QalcFunction {
	if (node instanceof Tree.InfixFunctionCallNode) {
		const op = node.fnname;
		const fn = operators.infixOperators[op];
		if (!fn) throw Error("function not found: " + op);
		return fn;
	} else if (node instanceof Tree.UnaryFunctionCallNode) {
		const op = node.fnname;
		const fn = operators.unaryOperators[op];
		if (!fn) throw Error("function not found: " + op);
		return fn;
	} else throw Error("wat");
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
		const fn = resolveFunction(node, scope);
		evNode.value = fn.apply(node, scope);
	} else if (node instanceof Tree.UnaryFunctionCallNode) {
		const fn = resolveFunction(node, scope);
		evNode.value = fn.apply(node, scope);
	} else throw Error("what is " + node.toDebugString());
	return evNode;
}

export function define(unit: EvaluatedNode, scope: Scope): TaggedString {
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
