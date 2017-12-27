import { UnitNumber } from "../unitNumber";
import * as Tree from "./Tree";
import Scope from "./scope";
import scope from "./globalScope";
import { evaluate } from "./evaluator";

export type QalcFunction =
	| (((...args: UnitNumber[]) => UnitNumber) & ({ rawInput: false }))
	| (((node: Tree.FunctionCallNode, scope: Scope) => UnitNumber) &
			({ rawInput: true }));

export function applyFunction(
	fn: QalcFunction,
	node: Tree.FunctionCallNode,
	scope: Scope,
) {
	if (fn.rawInput) return fn(node, scope);
	else return fn(...node.operands.map(arg => evaluate(arg, scope).value));
}

export const internalFunctions: [
	string,
	((...arg: UnitNumber[]) => UnitNumber)
][] = [
	["sqrt", num => num.pow(0.5)],
	[
		"ln",
		num => {
			num.dimensions.assertEmpty("argument of ln()");
			return new UnitNumber(num.value.ln());
		},
	],
	[
		"delete",
		num => {
			if (!num.id) throw Error("has no ID");
			return scope.deleteUnit(num.id) ? UnitNumber.one : UnitNumber.zero;
		},
	],
	[
		"log2",
		num => (
			num.dimensions.assertEmpty(), new UnitNumber(num.value.logarithm(2))
		),
	],
	[
		"exp",
		num => (num.dimensions.assertEmpty(), new UnitNumber(num.value.exp())),
	],
	[
		"tan",
		num => (
			num.dimensions.assertEmpty(),
			new UnitNumber(Math.tan(num.value.toNumber()))
		),
	],
	[
		"log",
		num => (
			num.dimensions.assertEmpty(),
			new UnitNumber(num.value.logarithm(10))
		),
	],
];
