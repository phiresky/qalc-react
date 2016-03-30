import {isEvaluated} from './evaluator';
import {TaggedString} from './output';
export enum TokenType {
	Identifier,
	Number,
	LParen, RParen,
	Operator,
	Whitespace,
	Unknown
}

const TokenTypeRegex: [RegExp, TokenType][] = [
	[/^\s+/, TokenType.Whitespace],
	[/^\(/, TokenType.LParen],
	[/^\)/, TokenType.RParen],
	[/^(=>|[ =≈+*/^|·!-]|to )/, TokenType.Operator],
	[/^[-+]?(([0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)|NaN|Infinity)/, TokenType.Number],
	[/^[^() =≈+*/^|·!>-]+/i, TokenType.Identifier],
	[/^./, TokenType.Unknown]
];
export interface Token { type: TokenType, str: string, start: number };

export function* tokenize(str: string): IterableIterator<Token> {
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
export function* preprocess(tokens: IterableIterator<Token>): IterableIterator<Token> {
	let lastToken: Token = null;
	for (const token of tokens) {
		if (token.type === TokenType.Whitespace) continue;
		if (lastToken) yield lastToken;
		if (lastToken && [TokenType.Identifier, TokenType.Number, TokenType.LParen].indexOf(token.type) >= 0
			&& [TokenType.Identifier, TokenType.Number, TokenType.RParen].indexOf(lastToken.type) >= 0) yield { type: TokenType.Operator, str: "", start: token.start };

		if (token.type === TokenType.Operator) {
			if (token.str === '*') token.str = '·';
			if (!lastToken || [TokenType.LParen, TokenType.Operator].indexOf(lastToken.type) >= 0) {
				// is an unary operator
				if (token.str === '-') token.str = token.str.replace('-', '#');
				else if (token.str === '/') yield { type: TokenType.Number, str: '1', start: token.start };
				else throw Error("Unary " + token.str + " not allowed");
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
	both
}
interface OperatorInfo { precedence: number, associativity: Associativity, arity: number, displayString?: string };
const operators: { [n: string]: OperatorInfo } = {
	'!': { precedence: 0.5, associativity: Associativity.left, arity: 1 },
	'#': { precedence: 0.5, associativity: Associativity.right, arity: 1, displayString: '-' }, // unary minus
	'+': { precedence: 4, associativity: Associativity.both, arity: 2 },
	'-': { precedence: 4, associativity: Associativity.left, arity: 2 },
	'': { precedence: 1.8, associativity: Associativity.left, arity: 2 },
	'·': { precedence: 2, associativity: Associativity.both, arity: 2 },
	'/': { precedence: 2, associativity: Associativity.left, arity: 2 },
	'|': { precedence: 1.5, associativity: Associativity.left, arity: 2 },
	'^': { precedence: 1, associativity: Associativity.right, arity: 2 },
	'=>': { precedence: 8, associativity: Associativity.right, arity: 2 },
	'=': { precedence: 10, associativity: Associativity.right, arity: 2 },
	'≈': { precedence: 10, associativity: Associativity.right, arity: 2 },
	'to': { precedence: 12, associativity: Associativity.left, arity: 2 }
}
function operator(token: Token) {
	const op = token.str.trim();
	const c = operators[op];
	if (!c) throw Error("unknown operator: '" + op + "'");
	return c;
}
export function* toRPN(tokens: Iterable<Token>) {
	const stack: Token[] = [];
	function top<T>(stack: T[]) { return stack[stack.length - 1] };
	for (const token of tokens) {
		switch (token.type) {
			case TokenType.Number:
			case TokenType.Identifier:
				yield token;
				break;
			case TokenType.Operator:
				const o1 = operator(token);
				let token2: Token, o2: OperatorInfo;
				while ((token2 = top(stack))
					&& token2.type === TokenType.Operator
					&& (o2 = operator(token2))
					&& (
						((o1.associativity == Associativity.left || o1.associativity == Associativity.both)
							&& o1.precedence >= o2.precedence)
						|| (o1.associativity == Associativity.right
							&& o1.precedence > o2.precedence)
					)
				) {
					yield stack.pop();
				}
				stack.push(token);
				break;
			case TokenType.LParen:
				stack.push(token);
				break;
			case TokenType.RParen:
				while (top(stack) && top(stack).type !== TokenType.LParen)
					yield stack.pop();
				if (stack.length === 0) throw Error(token.start + ": missing opening paren");
				stack.pop();
				break;
			default: throw Error('what is ' + token);
		}
	}
	while (stack.length > 0) {
		if (top(stack).type === TokenType.Operator) yield stack.pop();
		else throw Error(top(stack).start + ":missing closing parens");
	}
}

export function parse(str: string) {
	return Tree.rpnToTree(toRPN(preprocess(tokenize(str))));
}

export module Tree {

	export type Node = NumberNode | IdentifierNode | FunctionCallNode;

	export class NumberNode {
		constructor(public number: string) { }
		toTaggedString(parentPrecedence = Infinity) {
			return new TaggedString(this.number);
		}
		clone() { return new NumberNode(this.number); }
	}
	export class IdentifierNode {
		constructor(public identifier: string) { }
		toTaggedString(parentPrecedence = Infinity) {
			if (isEvaluated(this)) return (this as any).value.toTaggedString(); // todo: remove cast
			return new TaggedString(this.identifier);
		}
		clone() { return new IdentifierNode(this.identifier); }
	}
	export class FunctionCallNode {
		constructor(public fnname: string, public operands: Node[]) { }
		toTaggedString(parentPrecedence = Infinity): TaggedString {
			return TaggedString.t`${this.fnname}(${TaggedString.join(this.operands.map(x => x.toTaggedString(parentPrecedence)), ", ")})`;
		}
		clone(): FunctionCallNode { return new FunctionCallNode(this.fnname, this.operands.map(x => x.clone())); }
	}
	export class InfixFunctionCallNode extends FunctionCallNode {
		toTaggedString(parentPrecedence = Infinity): TaggedString {
			const op = operators[this.fnname];
			const disp = op.displayString || this.fnname;
			const leftAdd = op.associativity === Associativity.right ? -0.01 : 0;
			const rightAdd = op.associativity === Associativity.left ? -0.01 : 0;
			let result: TaggedString;
			if (this.operands.length === 1) result = TaggedString.t`${leftAdd ? disp : ""}${this.operands[0].toTaggedString(op.precedence + leftAdd + rightAdd)}${rightAdd ? disp : ""}`;
			else if (this.operands.length === 2)
				result = TaggedString.t`${this.operands[0].toTaggedString(op.precedence + leftAdd)} `
					.append(disp === "" ? "" : disp + " ")
					.append(this.operands[1].toTaggedString(op.precedence + rightAdd));
			else throw Error("invalid operand count");

			if (parentPrecedence < op.precedence)
				return TaggedString.t`(${result})`;
			else return result;
		}
	}
	export function rpnToTree(tokens: Iterable<Token>): Node {
		const stack: Node[] = [];
		for (const token of tokens) {
			if (token.type === TokenType.Operator) {
				const op = operators[token.str.trim()];
				if (stack.length < op.arity) throw Error(`Operator '${token.str.trim()}' needs ${op.arity} arguments, only got ${stack.length}`);
				const args = stack.splice(stack.length - op.arity);
				stack.push(new InfixFunctionCallNode(token.str.trim(), args));
			} else if (token.type === TokenType.Identifier) {
				stack.push(new IdentifierNode(token.str));
			} else if (token.type === TokenType.Number) {
				stack.push(new NumberNode(token.str));
			} else throw Error("to tree: don't know token type " + token.type);
		}
		if (stack.length !== 1) throw Error("stack error " + stack);
		return stack[0];
	}
}