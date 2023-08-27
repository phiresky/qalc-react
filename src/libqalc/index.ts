import { TaggedString } from "../unitNumber/output";
import {
	define, evaluate, evaluationHasSideeffect,
	stripCommentsTrim
} from "./evaluator";
import globalScope from "./globalScope";
import * as parser from "./parser";
import { AToken, RPNToken } from "./parser";
import Scope from "./scope";
import * as Tree from "./Tree";

function unitConvertedTaggedString(node: Tree.Node, scope: Scope) {
	if (node instanceof Tree.FunctionCallNode && node.fnname === "to") {
		const unit = evaluate(node.operands[1], scope);
		const numericValue = evaluate(node.operands[0], scope).value.div(
			unit.value,
		);
		return TaggedString.t`${numericValue.toString()} ${unit.toTaggedString()}`;
	} else return evaluate(node, scope).value.toTaggedString();
}

function isDefinition(node: Tree.EvaluatedNode) {
	if (node.value.id && node instanceof Tree.IdentifierNode) return true;
}

export async function qalculationHasSideeffect(
	input: string,
): Promise<boolean> {
	try {
		const tree = Tree.rpnToTree(
			parser.toRPN(parser.preprocess(parser.tokenize(input))),
		);
		return evaluationHasSideeffect(tree, globalScope);
	} catch (e) {
		// can't parse -> cant execute -> no sideeffects
		return false;
	}
}
export type QalculationResult = {
	input: TaggedString;
	output: TaggedString;
	comment?: string;
	type: "error" | "result" | "definition";
};
export async function qalculate(
	_input: string,
	debug = false,
): Promise<QalculationResult> {
	const scope = globalScope;
	if (debug) return qalculateDebug(_input);
	const { code, comment } = stripCommentsTrim(_input);
	const inputTree = Tree.rpnToTree(
		parser.toRPN(parser.preprocess(parser.tokenize(code))),
	);
	const evaled = evaluate(inputTree, scope);
	if (isDefinition(evaled))
		return {
			input: inputTree.toTaggedString(),
			output: define(evaled, scope),
			type: "definition",
			comment,
		};
	return {
		input: inputTree.toTaggedString(),
		output: TaggedString.t`${unitConvertedTaggedString(evaled, scope)}`,
		type: "result",
		comment,
	};
}
export async function qalculateDebug(
	_input: string,
): Promise<QalculationResult> {
	const scope = globalScope;
	const { code, comment } = stripCommentsTrim(_input);
	if (code.length === 0)
		return {
			input: TaggedString.t``,
			output: TaggedString.t``,
			type: "result",
			comment,
		};
	let error = "";
	let tokens: AToken[] | null = null;
	try {
		tokens = [...parser.tokenize(code)];
	} catch (e) {
		console.error(e);
		error += e + "\n";
	}
	const pre = (e: Error) => (e.stack || e) + "\n";
	let preproc: AToken[] | null = null;
	if (tokens)
		try {
			preproc = [...parser.preprocess(tokens)];
		} catch (e) {
			console.error(e);
			error += pre(e);
		}
	let rpn: RPNToken[] | null = null;
	if (preproc)
		try {
			rpn = [...parser.toRPN(preproc)];
		} catch (e) {
			error += pre(e);
		}
	let parsed: Tree.Node | null = null;
	if (rpn)
		try {
			parsed = Tree.rpnToTree(rpn);
		} catch (e) {
			error += pre(e);
		}
	let evaled: Tree.EvaluatedNode | null = null;
	if (parsed)
		try {
			evaled = evaluate(parsed, scope);
		} catch (e) {
			error += pre(e);
		}

	if (evaled && isDefinition(evaled))
		return {
			input: parsed!.toTaggedString(),
			output: define(evaled, scope),
			type: "definition",
			comment,
		};
	const output = TaggedString.t`
res = ${
		evaled
			? TaggedString.t`${evaled.toTaggedString()} = ${unitConvertedTaggedString(
					evaled,
					scope,
			  )}`
			: "err"
	}
tokens = ${
		tokens
			? tokens.map((t) => parser.tokenToDebugString(t)).join(" ")
			: "err"
	}
preproc = ${
		preproc
			? preproc.map((t) => parser.tokenToDebugString(t)).join(" ")
			: "err"
	}
rpn = ${rpn ? rpn.map((t) => parser.tokenToDebugString(t)).join(" ") : "err"}
parsed = ${parsed ? parsed.toDebugString() : "err"}
${error ? "error = " + error : ""}`;
	return {
		input: parsed ? parsed.toTaggedString() : TaggedString.t``,
		output,
		type: "result",
		comment,
	};
}

export { parseEvaluate } from "./evaluator";
export { default as init } from "./init";

