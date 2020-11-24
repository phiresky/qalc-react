import { UnitNumber, SpecialUnitNumber } from "../unitNumber";
import * as Tree from "./Tree";
import { QalcFunction } from "./functions";
import { evaluate, evaluationHasSideeffect } from "./evaluator";
import Scope from "./scope";

function makeFn(
	fn: (...args: UnitNumber[]) => UnitNumber,
	hasSideEffects: (
		node: Tree.FunctionCallNode,
		scope: Scope,
	) => boolean = () => false,
): QalcFunction {
	return {
		apply: (node, scope) =>
			fn(...node.operands.map((arg) => evaluate(arg, scope).value)),
		hasSideEffects,
	};
}
function memberAlias(
	fnname: "mul" | "div" | "plus" | "pow" | "minus" | "convertTo",
): QalcFunction {
	return makeFn(
		(a, b) => {
			const x: (other: UnitNumber) => UnitNumber = a[fnname];
			return x.call(a, b);
		},
		(node, scope) => {
			if (node.operands.some((op) => evaluationHasSideeffect(op, scope)))
				return true;
			const [op1, op2] = node.operands;
			const [o1, o2] = [evaluate(op1, scope), evaluate(op2, scope)];
			return o1.value.memberFunctionHasSideeffects(fnname, o2.value);
		},
	);
}

function makeRawFn(
	hasSideEffects: boolean | (() => boolean),
	apply: (args: Tree.FunctionCallNode, scope: Scope) => UnitNumber,
): QalcFunction {
	if (typeof hasSideEffects !== "function") {
		const val = hasSideEffects;
		hasSideEffects = () => val;
	}
	return {
		apply,
		hasSideEffects,
	};
}
const yes = UnitNumber.one;
const no = UnitNumber.zero;
export const unaryOperators: { [name: string]: QalcFunction } = {
	"-": makeFn((l) => l.mul(UnitNumber.minusOne)),
	"/": makeFn((l) => UnitNumber.one.div(l)),
};
const assignment = makeRawFn(true, (node, scope) => {
	const [name, val] = node.operands;
	const evNode = node as Tree.EvaluatedNode;
	if (name instanceof Tree.IdentifierNode) {
		scope.setUnitOrPrefix(name.identifier, evNode, evaluate(val, scope));
		return evNode.value;
	} else {
		const leftVal = evaluate(name, scope);
		if (leftVal.value.id) leftVal.value.assign(evaluate(val, scope).value);
		else throw Error("invalid left hand side of assignment");
		return leftVal.value;
	}
});
export const infixOperators: { [name: string]: QalcFunction | undefined } = {
	"=": assignment,
	"≈": assignment,
	"!": makeRawFn(true, (node, scope) => {
		const [name, oth] = node.operands;
		if (oth) throw Error("! must be at end of line");
		const evNode = node as Tree.EvaluatedNode;
		if (name instanceof Tree.IdentifierNode) {
			evNode.value = UnitNumber.createBaseUnit(name.identifier);
			scope.setUnit(name.identifier, evNode);
			return evNode.value;
		} else throw Error("invalid definition");
	}),
	"=>": makeRawFn(false, (node, scope) => {
		const [argNameNode, val] = node.operands;
		if (argNameNode instanceof Tree.IdentifierNode) {
			const argName = argNameNode.identifier;
			return new SpecialUnitNumber({
				fnTree: val,
				fn: (arg) => {
					const argval = new Tree.IdentifierNode(
						argName,
					) as Tree.EvaluatedNode;
					argval.value = arg;
					return evaluate(
						val.clone(),
						scope.withNew([argName, argval]),
					).value;
				},
				hasSideEffects: false,
			});
		} else throw Error("invalid lambda definition");
	}),
	">": makeFn(
		(a, b) => (
			a.dimensions.assertEqual(b.dimensions),
			a.value.greaterThan(b.value) ? yes : no
		),
	),
	"<": makeFn(
		(a, b) => (
			a.dimensions.assertEqual(b.dimensions),
			a.value.lessThan(b.value) ? yes : no
		),
	),
	">=": makeFn(
		(a, b) => (
			a.dimensions.assertEqual(b.dimensions),
			a.value.greaterThanOrEqualTo(b.value) ? yes : no
		),
	),
	"<=": makeFn(
		(a, b) => (
			a.dimensions.assertEqual(b.dimensions),
			a.value.lessThanOrEqualTo(b.value) ? yes : no
		),
	),
	"==": makeFn((a, b) =>
		a.value.equals(b.value) && a.dimensions.equals(b.dimensions) ? yes : no,
	),
	"!=": makeFn(
		(a, b) => (
			a.dimensions.assertEqual(b.dimensions),
			a.value.equals(b.value) ? no : yes
		),
	),

	"&&": makeRawFn(false, ({ operands: [a, b] }, scope) => {
		const aEv = evaluate(a, scope).value;
		return !aEv.value.isZero() ? evaluate(b, scope).value : aEv;
	}),
	"||": makeRawFn(false, ({ operands: [a, b] }, scope) => {
		const aEv = evaluate(a, scope).value;
		return aEv.value.isZero() ? evaluate(b, scope).value : aEv;
	}),

	"·": memberAlias("mul"),
	"": memberAlias("mul"),
	"/": memberAlias("div"),
	"|": memberAlias("div"),
	"^": memberAlias("pow"),
	"+": memberAlias("plus"),
	"-": memberAlias("minus"),
	to: memberAlias("convertTo"),
};
