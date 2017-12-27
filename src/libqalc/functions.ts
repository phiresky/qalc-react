import { UnitNumber } from "../unitNumber";
import * as Tree from "./Tree";
import Scope from "./scope";
import scope from "./globalScope";

export interface QalcFunction {
	apply(node: Tree.FunctionCallNode, scope: Scope): UnitNumber;
	hasSideEffects(node: Tree.FunctionCallNode, scope: Scope): boolean;
}
export interface FunctionDefinition {
	name: string;
	fn: (arg: UnitNumber) => UnitNumber;
	hasSideEffects?: true;
	/**
	 * * leftOnly: `log 10`
	 * * rightOnly: `10 °C`
	 * * both: `fn x` and `x fn`
	 *
	 * default: leftOnly
	 */
	mode?: "leftOnly" | "rightOnly" | "leftAndRight";
}
export const internalFunctions: FunctionDefinition[] = [
	{ name: "sqrt", fn: num => num.pow(0.5) },
	{
		name: "ln",
		fn: num => {
			num.dimensions.assertEmpty("argument of ln()");
			return new UnitNumber(num.value.ln());
		},
	},
	{
		name: "delete",
		fn: num => {
			if (!num.id) throw Error("has no ID");
			return scope.deleteUnit(num.id) ? UnitNumber.one : UnitNumber.zero;
		},
		hasSideEffects: true,
	},
	{
		name: "log2",
		fn: num => (
			num.dimensions.assertEmpty(), new UnitNumber(num.value.logarithm(2))
		),
	},
	{
		name: "exp",
		fn: num => (
			num.dimensions.assertEmpty(), new UnitNumber(num.value.exp())
		),
	},
	{
		name: "tan",
		fn: num => (
			num.dimensions.assertEmpty(),
			new UnitNumber(Math.tan(num.value.toNumber()))
		),
	},
	{
		name: "log",
		fn: num => (
			num.dimensions.assertEmpty(),
			new UnitNumber(num.value.logarithm(10))
		),
	},
];
