import Scope from "./scope";
import { stripCommentsTrim, evaluate } from "./evaluator";
import { parse } from "./parser";
import * as Tree from "./Tree";
export function loadUnit(
	scope: Scope,
	data: { line: string; info: { comment: string; headings: string[] } },
	postEvaluate: any,
) {
	const line = stripCommentsTrim(data.line);
	if (line.length === 0) return;
	if (line.indexOf("=") >= 0 && line.split("=")[0].search(/[\(\[]/) >= 0)
		return;
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
export function loadUnitsJson(
	scope: Scope,
	filename: string,
	data: { line: string; info: { comment: string; headings: string[] } }[],
) {
	const postEvaluate = [] as {
		reevaluateUnit?: string;
		evaluateNode?: Tree.Node;
	}[];
	for (let i = 0; i < data.length; i++) {
		try {
			loadUnit(scope, data[i], postEvaluate);
		} catch (e) {
			console.error(filename + ":" + (i + 1), data[i], e);
		}
	}
	// force evaluate all units
	for (const { reevaluateUnit, evaluateNode } of postEvaluate) {
		try {
			if (reevaluateUnit) scope.getUnit(reevaluateUnit);
			if (evaluateNode) evaluate(evaluateNode, scope);
		} catch (e) {
			console.error(
				"force-evaluate unit",
				reevaluateUnit || evaluateNode,
				e,
			);
		}
	}
}
export const loadUnitsTxt = (scope: Scope, filename: string, data: string) => {
	loadUnitsJson(
		scope,
		filename,
		data
			.split("\n")
			.map(line => ({ line, info: { comment: "", headings: [] } })),
	);
};
