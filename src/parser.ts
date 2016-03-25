export enum TokenType {
	Identifier,
	Number,
	LParen, RParen,
	Operator,
	FunctionCall,
	Unknown
}

const TokenTypeRegex: [RegExp, TokenType][] = [
	[/^\s*\(\s*/, TokenType.LParen],
	[/^\s*\)\s*/, TokenType.RParen],
	[/^\s*([ =≈+*/^-]|to )\s*/, TokenType.Operator],
	[/^[-+]?(([0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)|NaN|Infinity)/, TokenType.Number],
	[/^[^() =≈+*/^-]+/i, TokenType.Identifier],
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
 * - replace unary minus with operator '#'
 * - identifier before '(' is function call e.g. "sin(x)"
 * - implicit multiplication between {), num, identifier} and {(, num, identifier)}
 */
export function* tokenFix(tokens: IterableIterator<Token>): IterableIterator<Token> {
	let lastToken: Token = null;
	for (const token of tokens) {
		if (token.type === TokenType.Operator && [null, TokenType.LParen, TokenType.Operator].indexOf(lastToken.type) >= 0) {
			// is an unary operator
			if (token.str.trim() === '-') token.str = token.str.replace('-', '#');
			else throw Error("Unary " + token.str + " not allowed");
		}
		
		if (token.type === TokenType.LParen && lastToken && lastToken.type === TokenType.Identifier)
				lastToken.type = TokenType.FunctionCall;	 
		if(lastToken) yield lastToken;
		if (lastToken && [TokenType.Identifier, TokenType.Number, TokenType.LParen].indexOf(token.type) >= 0
			&& [TokenType.Identifier, TokenType.Number, TokenType.RParen].indexOf(lastToken.type) >= 0) yield { type: TokenType.Operator, str: "", start: token.start };
		lastToken = token;
	}
	if(lastToken) yield lastToken;
}

enum Associativity { left, right }
interface OperatorInfo { precedence: number, associativity: Associativity };
const operators: { [n: string]: OperatorInfo } = {
	'#': { precedence: 0.5, associativity: Associativity.left }, // unary minus
	'+': { precedence: 4, associativity: Associativity.left },
	'-': { precedence: 4, associativity: Associativity.left },
	// if 1/2 m should be 1/(2m) instead of (1/2) m set '' precedence to 1.5
	'': { precedence: 2, associativity: Associativity.left },
	'*': { precedence: 2, associativity: Associativity.left },
	'/': { precedence: 2, associativity: Associativity.left },
	'^': { precedence: 1, associativity: Associativity.right },
	'=': { precedence: 10, associativity: Associativity.right },
	'≈': { precedence: 10, associativity: Associativity.right },
	'to': { precedence: 12, associativity: Associativity.left }
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
	return toRPN(tokenFix(tokenize(str)));
}