import Scope from "./scope";
import { stripCommentsTrim, evaluate } from "./evaluator";
import { parse } from "./parser";
import * as Tree from "./Tree";
type PostEvaluation = {
	reevaluateUnit?: string;
	evaluateNode?: Tree.Node;
};
export function loadUnit(
	scope: Scope,
	data: { line: string; info: { comment: string; headings: string[] } },
	postEvaluate: { push(p: PostEvaluation): void },
) {
	const { code: line } = stripCommentsTrim(data.line);
	if (line.length === 0) return;
	//if (line.indexOf("=") >= 0 && line.split("=")[0].search(/[\(\[]/) >= 0)
	//	return;
	const tree = parse(line);
	if (tree instanceof Tree.FunctionCallNode && tree.fnname === "=") {
		const nameNode = tree.operands[0];
		const name =
			nameNode instanceof Tree.IdentifierNode && nameNode.identifier;
		if (!name) {
			postEvaluate.push({ evaluateNode: tree });
			return;
		}
		scope.setUnitOrPrefixRaw(name, tree);
		scope.docMap.set(name, data.info);
		postEvaluate.push({ reevaluateUnit: name });
	} else if (tree instanceof Tree.FunctionCallNode && tree.fnname === "!") {
		scope.docMap.set(
			(tree.operands[0] as Tree.IdentifierNode).identifier,
			data.info,
		);
		postEvaluate.push({ evaluateNode: tree });
	} else {
		postEvaluate.push({ evaluateNode: tree });
	}
}
function applyPostEvaluate(
	scope: Scope,
	{ reevaluateUnit, evaluateNode }: PostEvaluation,
) {
	try {
		if (reevaluateUnit) scope.getUnit(reevaluateUnit);
		if (evaluateNode) evaluate(evaluateNode, scope);
	} catch (e) {
		console.error("force-evaluate unit", reevaluateUnit || evaluateNode, e);
	}
}
export function loadUnitsJson(
	scope: Scope,
	filename: string,
	data: { line: string; info: { comment: string; headings: string[] } }[],
	immediately = false,
) {
	const postEvaluate = immediately
		? {
				push(x: PostEvaluation) {
					applyPostEvaluate(scope, x);
				},
		  }
		: ([] as PostEvaluation[]);
	for (let i = 0; i < data.length; i++) {
		try {
			loadUnit(scope, data[i], postEvaluate);
		} catch (e) {
			console.error(filename + ":" + (i + 1), data[i], e);
		}
	}
	// force evaluate all units
	if (Array.isArray(postEvaluate))
		for (const p of postEvaluate) {
			applyPostEvaluate(scope, p);
		}
}
export const loadUnitsTxt = (
	scope: Scope,
	filename: string,
	data: string,
	immediately: boolean,
) => {
	loadUnitsJson(
		scope,
		filename,
		data
			.split("\n")
			.map((line) => ({ line, info: { comment: "", headings: [] } })),
		immediately,
	);
};
