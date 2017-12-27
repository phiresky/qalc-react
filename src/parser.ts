import { isEvaluated } from "./evaluator";
import { TaggedString } from "./output";
export namespace TokenType {
	export const Identifier = "Identifier";
	export type Identifier = typeof Identifier;
	export const Number = "Number";
	export type Number = typeof Number;
	export const LParen = "LParen";
	export type LParen = typeof LParen;
	export const RParen = "RParen";
	export type RParen = typeof RParen;
	export const Operator = "Operator";
	export type Operator = typeof Operator;
	export const Whitespace = "Whitespace";
	export type Whitespace = typeof Whitespace;
	export const Unknown = "Unknown";
	export type Unknown = typeof Unknown;
}
type TokenType =
	| TokenType.Identifier
	| TokenType.Number
	| TokenType.LParen
	| TokenType.RParen
	| TokenType.Operator
	| TokenType.Whitespace
	| TokenType.Unknown;
export namespace RPNTokenType {
	export const Identifier = "Identifier";
	export type Identifier = typeof Identifier;
	export const Number = "Number";
	export type Number = typeof Number;
	export const LParen = "LParen";
	export type LParen = typeof LParen;
	export const RParen = "RParen";
	export type RParen = typeof RParen;
	export const UnaryOperator = "UnaryOperator";
	export type UnaryOperator = typeof UnaryOperator;
	export const InfixOperator = "InfixOperator";
	export type InfixOperator = typeof InfixOperator;
	export const Whitespace = "Whitespace";
	export type Whitespace = typeof Whitespace;
	export const Unknown = "Unknown";
	export type Unknown = typeof Unknown;
}
export type RPNTokenType =
	| RPNTokenType.Identifier
	| RPNTokenType.Number
	| RPNTokenType.LParen
	| RPNTokenType.RParen
	| RPNTokenType.UnaryOperator
	| RPNTokenType.InfixOperator
	| RPNTokenType.Whitespace
	| RPNTokenType.Unknown;

const TokenTypeRegex: [RegExp, TokenType][] = [
	[/^\s+/, TokenType.Whitespace],
	[/^\(/, TokenType.LParen],
	[/^\)/, TokenType.RParen],
	[/^(=>|<=|>=|\|\||&&|==|!=|[ =≈+*/^|·!<>-]|to )/, TokenType.Operator],
	[
		/^[-+]?(([0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)|NaN|Infinity)/,
		TokenType.Number,
	],
	[/^[^() =<>≈+*/^&|·!>-]+/i, TokenType.Identifier],
	[/^./, TokenType.Unknown],
];
interface Token<Type extends RPNTokenType | TokenType> {
	type: Type;
	str: string;
	start: number;
}
export type RPNToken = Token<RPNTokenType>;

export type AToken = Token<TokenType>;

export function tokenToDebugString(t: AToken | RPNToken): string {
	return `(${t.type} '${t.str}')`;
}

export function* tokenize(str: string): IterableIterator<AToken> {
	let i = 0;
	let it = 0;
	while (i < str.length) {
		it++;
		for (const [regex, type] of TokenTypeRegex) {
			const match = regex.exec(str.substr(i));
			if (match) {
				let str = match[0];
				yield { type, str, start: i };
				i += str.length;
				break;
			}
		}
		if (it > 1000) throw Error("wtf");
	}
}

/**
 * fix some things:
 * - remove whitespace
 * - replace unary minus with operator '#', "/m" with "1/m"
 * - replace unicode · with *
 * - identifier before '(' is function call e.g. "sin(x)"
 * - implicit multiplication between {), num, identifier} and {(, num, identifier)}
 */
export function* preprocess(
	tokens: Iterable<AToken>,
): IterableIterator<AToken> {
	let lastToken: AToken | null = null;
	for (const token of tokens) {
		if (token.type === TokenType.Whitespace) continue;
		if (lastToken) yield lastToken;
		if (
			lastToken &&
			[TokenType.Identifier, TokenType.Number, TokenType.LParen].indexOf(
				token.type,
			) >= 0 &&
			[TokenType.Identifier, TokenType.Number, TokenType.RParen].indexOf(
				lastToken.type,
			) >= 0
		)
			yield { type: TokenType.Operator, str: "", start: token.start };

		if (token.type === TokenType.Operator) {
			if (token.str === "*") token.str = "·";
			if (token.str === "in") token.str = "to";
			if (
				!lastToken ||
				[TokenType.LParen, TokenType.Operator].indexOf(
					lastToken.type,
				) >= 0
			) {
				/*// is an unary operator
				if (token.str === "-") token.str = token.str.replace("-", "#");
				else if (token.str === "/")
					yield {
						type: TokenType.Number,
						str: "1",
						start: token.start,
					};
				else throw Error("Unary " + token.str + " not allowed");*/
			}
		}
		lastToken = token;
	}
	if (lastToken) yield lastToken;
}

enum Associativity {
	/** a / b / c = (a / b) / c */
	left,
	/** a ^ b ^ c = a ^ (b ^ c) */
	right,
	/** a + b + c = (a + b) + c = a + (b + c) */
	both,
}
interface OperatorInfo<arity extends number = 2> {
	precedence: number;
	associativity: Associativity;
	arity: arity;
	displayString?: string;
}
const infixOperators: { [n: string]: OperatorInfo } = {
	// hack: this only allowed at end of line
	"!": { precedence: 0.5, associativity: Associativity.left, arity: 1 as 2 },

	"^": { precedence: 1, associativity: Associativity.right, arity: 2 },
	"|": { precedence: 1.5, associativity: Associativity.left, arity: 2 },
	"": { precedence: 1.8, associativity: Associativity.left, arity: 2 },
	"·": { precedence: 2, associativity: Associativity.both, arity: 2 },
	"/": { precedence: 2, associativity: Associativity.left, arity: 2 },
	"+": { precedence: 4, associativity: Associativity.both, arity: 2 },
	"-": { precedence: 4, associativity: Associativity.left, arity: 2 },
	"<": { precedence: 5, associativity: Associativity.left, arity: 2 },
	"<=": { precedence: 5, associativity: Associativity.left, arity: 2 },
	">": { precedence: 5, associativity: Associativity.left, arity: 2 },
	">=": { precedence: 5, associativity: Associativity.left, arity: 2 },
	"==": { precedence: 6, associativity: Associativity.left, arity: 2 },
	"!=": { precedence: 6, associativity: Associativity.left, arity: 2 },
	//'&': { precedence: 7, associativity: Associativity.left, arity: 2 },
	//'^': { precedence: 7.1, associativity: Associativity.left, arity: 2 },
	//'|': { precedence: 7.2, associativity: Associativity.left, arity: 2 },
	"&&": { precedence: 7.3, associativity: Associativity.left, arity: 2 },
	"||": { precedence: 7.4, associativity: Associativity.left, arity: 2 },
	"=>": { precedence: 8, associativity: Associativity.right, arity: 2 },
	"=": { precedence: 10, associativity: Associativity.right, arity: 2 },
	"≈": { precedence: 10, associativity: Associativity.right, arity: 2 },
	to: { precedence: 12, associativity: Associativity.left, arity: 2 },
};
const unaryOperators: { [n: string]: OperatorInfo<1> } = {
	"-": {
		precedence: 0.5,
		associativity: Associativity.right,
		arity: 1,
	}, // unary minus
	"/": {
		precedence: 0.8,
		associativity: Associativity.right,
		arity: 1,
	}, // unary minus
};
function operator(token: RPNToken) {
	const op = token.str.trim();
	if (token.type === RPNTokenType.InfixOperator)
		var c: OperatorInfo<1 | 2> = infixOperators[op];
	else if (token.type === RPNTokenType.UnaryOperator) c = unaryOperators[op];
	else return null;
	if (!c) throw Error(`unknown ${token.type}: '${op}'`);
	return c;
}
export function* toRPN(tokens: Iterable<AToken>): IterableIterator<RPNToken> {
	const stack: Token<
		| TokenType.LParen
		| RPNTokenType.InfixOperator
		| RPNTokenType.UnaryOperator
	>[] = [];
	function top<T>(stack: T[]) {
		return stack[stack.length - 1];
	}
	let infix_mode: "infix" | "unary" = "unary";
	function yieldOperator(
		token: AToken,
	): Token<RPNTokenType.InfixOperator | RPNTokenType.UnaryOperator> {
		if (token.type !== TokenType.Operator)
			throw Error("not an operator " + token.type);
		if (infix_mode === "infix")
			return {
				...token,
				type: RPNTokenType.InfixOperator,
			};
		else
			return {
				...token!,
				type: RPNTokenType.UnaryOperator,
			};
	}
	for (const token of tokens) {
		switch (token.type) {
			case TokenType.Number:
			case TokenType.Identifier:
				yield { ...token, type: token.type };
				infix_mode = "infix";
				break;
			case TokenType.Operator:
				const convToken = yieldOperator(token);
				const o1 = operator(convToken)!;
				let token2: RPNToken, o2: OperatorInfo<1 | 2> | null;
				while (
					(token2 = top(stack)) &&
					(o2 = operator(token2)) &&
					(((o1.associativity === Associativity.left ||
						o1.associativity === Associativity.both) &&
						o1.precedence >= o2.precedence) ||
						(o1.associativity === Associativity.right &&
							o1.precedence > o2.precedence))
				) {
					yield stack.pop()!;
				}
				stack.push(convToken);
				infix_mode = "unary";
				break;
			case TokenType.LParen:
				stack.push({ ...token, type: token.type });
				infix_mode = "unary";
				break;
			case TokenType.RParen:
				while (top(stack) && top(stack).type !== TokenType.LParen)
					yield stack.pop()!;
				if (stack.length === 0)
					throw Error(token.start + ": missing opening paren");
				stack.pop();
				infix_mode = "infix";
				break;
			default: {
				console.error("unknown token ", token);
				throw Error("what is " + token);
			}
		}
	}
	while (stack.length > 0) {
		if (top(stack).type === RPNTokenType.UnaryOperator) yield stack.pop()!;
		else if (top(stack).type === RPNTokenType.InfixOperator) {
			yield stack.pop()!;
			//throw Error("Missing second operand for " + top(stack).str);
		} else throw Error(top(stack).start + ":missing closing parens");
	}
}

export function parse(str: string) {
	return Tree.rpnToTree(toRPN(preprocess(tokenize(str))));
}

export namespace Tree {
	export type Node = NumberNode | IdentifierNode | FunctionCallNode;

	export class NumberNode {
		constructor(public number: string) {}
		toTaggedString(parentPrecedence = Infinity) {
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
		toTaggedString(parentPrecedence = Infinity) {
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
			const leftAdd =
				op.associativity === Associativity.right ? -0.01 : 0;
			const rightAdd =
				op.associativity === Associativity.left ? -0.01 : 0;
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
						this.operands[1].toTaggedString(
							op.precedence + rightAdd,
						),
					);
			else throw Error("invalid operand count");

			if (parentPrecedence < op.precedence)
				return TaggedString.t`(${result})`;
			else return result;
		}
		toDebugString(): string {
			return `(${this.operands[0].toDebugString()} ${
				this.fnname
			} ${this.operands[1].toDebugString()})`;
		}
	}
	export function rpnToTree(tokens: Iterable<RPNToken>): Node {
		const stack: Node[] = [];
		for (const token of tokens) {
			if (token.type === RPNTokenType.InfixOperator) {
				const op = infixOperators[token.str.trim()];
				if (stack.length < op.arity)
					throw Error(
						`Operator '${token.str.trim()}' needs ${
							op.arity
						} arguments, only got ${stack.length}`,
					);
				const args = stack.splice(stack.length - op.arity);
				stack.push(new InfixFunctionCallNode(token.str.trim(), args));
			} else if (token.type === RPNTokenType.UnaryOperator) {
				const op = unaryOperators[token.str.trim()];
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
}
