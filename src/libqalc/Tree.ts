import { TaggedString } from "../output";
import * as Tree from "./Tree";
import { UnitNumber } from "../unitNumber";
import {
	TokenType,
	RPNToken,
	RPNTokenType,
	infixOperators,
	Associativity,
	unaryOperators,
} from "./parser";

export type Node = NumberNode | IdentifierNode | FunctionCallNode;

export function isEvaluated(node: Tree.Node): node is EvaluatedNode {
	return !!(node as any).value;
}

export type EvaluatedNode = Tree.Node & { value: UnitNumber };

export class NumberNode {
	constructor(public number: string) {}
	toTaggedString(_parentPrecedence = Infinity) {
		return new TaggedString(this.number);
	}
	toJSON() {
		return { type: "NumberNode", number: this.number };
	}
	toDebugString() {
		return this.number;
	}
	clone() {
		return new NumberNode(this.number);
	}
}
export class IdentifierNode {
	constructor(public identifier: string) {}
	toTaggedString(_parentPrecedence = Infinity) {
		if (isEvaluated(this)) return (this as any).value.toTaggedString(); // todo: remove cast
		return new TaggedString(this.identifier);
	}
	toJSON() {
		return { type: "IdenifierNode", identifier: this.identifier };
	}
	toDebugString() {
		return this.identifier;
	}
	clone() {
		return new IdentifierNode(this.identifier);
	}
}
export abstract class FunctionCallNode {
	constructor(public fnname: string, public operands: Node[]) {}
	toTaggedString(parentPrecedence = Infinity): TaggedString {
		return TaggedString.t`${this.fnname}(${TaggedString.join(
			this.operands.map(x => x.toTaggedString(parentPrecedence)),
			", ",
		)})`;
	}
	toJSON(): any {
		return {
			type: this.constructor.name,
			fnname: this.fnname,
			operands: this.operands.map(x => x.toJSON()),
		};
	}
	abstract toDebugString(): string;
	clone(): FunctionCallNode {
		return new (this.constructor as any)(
			this.fnname,
			this.operands.map(o => o.clone()),
		);
	}
}
export class UnaryFunctionCallNode extends FunctionCallNode {
	toDebugString(): string {
		return `(${this.fnname} ${this.operands[0].toDebugString()})`;
	}
}
export class InfixFunctionCallNode extends FunctionCallNode {
	toTaggedString(parentPrecedence = Infinity): TaggedString {
		const op = infixOperators[this.fnname];
		const disp = op.displayString || this.fnname;
		const leftAdd = op.associativity === Associativity.right ? -0.01 : 0;
		const rightAdd = op.associativity === Associativity.left ? -0.01 : 0;
		let result: TaggedString;
		if (this.operands.length === 1)
			result = TaggedString.t`${
				leftAdd ? disp : ""
			}${this.operands[0].toTaggedString(
				op.precedence + leftAdd + rightAdd,
			)}${rightAdd ? disp : ""}`;
		else if (this.operands.length === 2)
			result = TaggedString.t`${this.operands[0].toTaggedString(
				op.precedence + leftAdd,
			)} `
				.append(disp === "" ? "" : disp + " ")
				.append(
					this.operands[1].toTaggedString(op.precedence + rightAdd),
				);
		else throw Error("invalid operand count");

		if (parentPrecedence < op.precedence)
			return TaggedString.t`(${result})`;
		else return result;
	}
	toDebugString(): string {
		//if (this.operands.length !== 2)
		//	throw Error(`${this} has ${this.operands.length} ≠ 2 operands`);
		return `(${this.operands[0].toDebugString()} ${this.fnname} ${
			this.operands[1] ? this.operands[1].toDebugString() : ""
		})`;
	}
}
export function rpnToTree(tokens: Iterable<RPNToken>): Node {
	const stack: Node[] = [];
	for (const token of tokens) {
		if (token.type === RPNTokenType.InfixOperator) {
			const op = infixOperators[token.str.trim()];
			if (!op) throw Error("Operator not found: " + token.str);
			if (stack.length < op.arity)
				throw Error(
					`Operator '${token.str.trim()}' needs ${
						op.arity
					} arguments, only got ${stack.length}`,
				);
			stack.push(
				new InfixFunctionCallNode(
					token.str.trim(),
					stack.splice(stack.length - op.arity),
				),
			);
		} else if (token.type === RPNTokenType.UnaryOperator) {
			const op = unaryOperators[token.str.trim()];
			if (stack.length < op.arity)
				throw Error(
					`Operator '${token.str.trim()}' needs ${
						op.arity
					} arguments, only got ${stack.length}`,
				);
			stack.push(
				new UnaryFunctionCallNode(
					token.str.trim(),
					stack.splice(stack.length - op.arity),
				),
			);
		} else if (token.type === TokenType.Identifier) {
			stack.push(new IdentifierNode(token.str));
		} else if (token.type === TokenType.Number) {
			stack.push(new NumberNode(token.str));
		} else throw Error("to tree: don't know token type " + token.type);
	}
	if (stack.length !== 1)
		throw Error(
			"stack has more than one element left: " +
				stack.map(x => x.toDebugString()),
		);
	return stack[0];
}
