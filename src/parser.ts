export enum TokenType {
	Identifier,
	Number,
	LParen, RParen,
	Operator,
	FunctionCall,
	Whitespace,
	Unknown
}

const TokenTypeRegex: [RegExp, TokenType][] = [
	[/^\s+/, TokenType.Whitespace],
	[/^\(/, TokenType.LParen],
	[/^\)/, TokenType.RParen],
	[/^([ =≈+*/^|·-]|to )/, TokenType.Operator],
	[/^[-+]?(([0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)|NaN|Infinity)/, TokenType.Number],
	[/^[^() =≈+*/^|·-]+/i, TokenType.Identifier],
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
		if(token.type === TokenType.Whitespace) continue;
		if (token.type === TokenType.LParen && lastToken && lastToken.type === TokenType.Identifier)
				lastToken.type = TokenType.FunctionCall;	 
		if(lastToken) yield lastToken;
		if (lastToken && [TokenType.Identifier, TokenType.Number, TokenType.LParen].indexOf(token.type) >= 0
			&& [TokenType.Identifier, TokenType.Number, TokenType.RParen].indexOf(lastToken.type) >= 0) yield { type: TokenType.Operator, str: "", start: token.start };

		if(token.type === TokenType.Operator) {
			if(token.str === '·') token.str = '*';
			if (!lastToken || [TokenType.LParen, TokenType.Operator].indexOf(lastToken.type) >= 0) {
				// is an unary operator
				if (token.str === '-') token.str = token.str.replace('-', '#');
				else if(token.str === '/') yield {type: TokenType.Number, str: '1', start: token.start};
				else throw Error("Unary " + token.str + " not allowed");
			}
		}
		lastToken = token;
	}
	if(lastToken) yield lastToken;
}

enum Associativity { left, right }
interface OperatorInfo { precedence: number, associativity: Associativity, arity: number, associative?: boolean };
const operators: { [n: string]: OperatorInfo } = {
	'#': { precedence: 0.5, associativity: Associativity.left, arity: 1 }, // unary minus
	'+': { precedence: 4, associativity: Associativity.left, arity: 2, associative: true },
	'-': { precedence: 4, associativity: Associativity.left, arity: 2 },
	'': { precedence: 1.8, associativity: Associativity.left, arity: 2 },
	'*': { precedence: 2, associativity: Associativity.left, arity: 2, associative: true },
	'/': { precedence: 2, associativity: Associativity.left, arity: 2 },
	'|': { precedence: 1.5, associativity: Associativity.left, arity: 2 },
	'^': { precedence: 1, associativity: Associativity.right, arity: 2 },
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
						(o1.associativity == Associativity.left
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
			case TokenType.FunctionCall:
				stack.push(token);
				break;
			case TokenType.RParen:
				while (top(stack) && top(stack).type !== TokenType.LParen)
					yield stack.pop();
				if (stack.length === 0) throw Error("mismatched parens 1: " + token.start);
				stack.pop();
				if (top(stack) && top(stack).type === TokenType.FunctionCall)
					yield stack.pop();
				break;
			default: throw Error('what is ' + token);
		}
	}
	while (stack.length > 0) {
		if (top(stack).type === TokenType.Operator) yield stack.pop();
		else throw Error("mismatched parens 2: " + top(stack).start);
	}
}
export function parse(str: string) {
	return toRPN(preprocess(tokenize(str)));
}





class Node {
	constructor(public text = "") {}
	toString(parentPrecedence = Infinity) {
		return this.text;
	}
}
class FunctionCallNode extends Node {
	constructor(public fnname: string, public operand: Node) {super();}
	toString(parentPrecedence = Infinity) {
		return `${this.fnname}(${this.operand})`;
	}
}
class OperatorNode extends Node {
	constructor(public operator: string, public operands: Node[]) {super();}
	toString(parentPrecedence = Infinity) {
		//return this.operands.map(x => `(${x})`).join(this.operator);
		const op = operators[this.operator];
		let leftAdd = 0, rightAdd = 0;
		if(!op.associative) {
			leftAdd = op.associativity === Associativity.right ? -0.01 : 0;
			rightAdd = op.associativity === Associativity.left ? -0.01 : 0;
		}
		const result = `${this.operands[0].toString(op.precedence+leftAdd)} ${this.operator} ${this.operands[1].toString(op.precedence+rightAdd)}`;

		if (parentPrecedence < op.precedence)
			return `(${result})`;
		else return result;
	}
}

export function rpnToTree(tokens: Iterable<Token>): Node {
	const stack: Node[] = [];
	for(const token of tokens) {
		if(token.type === TokenType.Operator) {
			const op = operators[token.str];
			if(stack.length < op.arity) throw Error("stack error");
			const args = stack.splice(stack.length - op.arity);
			stack.push(new OperatorNode(token.str, args));
		} else if(token.type === TokenType.Identifier || token.type === TokenType.Number) {
			stack.push(new Node(token.str));
		} else if(token.type === TokenType.FunctionCall) {
			if(stack.length < 1) throw Error("fn stack error");
			const arg = stack.pop();
			stack.push(new FunctionCallNode(token.str, arg));
		} else throw Error("to tree: don't know token type "+token.type);
	}
	if(stack.length !== 1) throw Error("stack error "+stack);
	return stack[0];
}