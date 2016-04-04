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
	[/^(=>|<=|>=|\|\||&&|==|!=|[ =≈+*/^|·!<>-]|to )/, TokenType.Operator],
	[/^[-+]?(([0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)|NaN|Infinity)/, TokenType.Number],
	[/^[^() =<>≈+*/^&|·!>-]+/i, TokenType.Identifier],
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
			if (token.str === 'in') token.str = 'to';
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
	'^': { precedence: 1, associativity: Associativity.right, arity: 2 },
	'|': { precedence: 1.5, associativity: Associativity.left, arity: 2 },
	'': { precedence: 1.8, associativity: Associativity.left, arity: 2 },
	'·': { precedence: 2, associativity: Associativity.both, arity: 2 },
	'/': { precedence: 2, associativity: Associativity.left, arity: 2 },
	'+': { precedence: 4, associativity: Associativity.both, arity: 2 },
	'-': { precedence: 4, associativity: Associativity.left, arity: 2 },
	'<': { precedence: 5, associativity: Associativity.left, arity: 2 },
	'<=': { precedence: 5, associativity: Associativity.left, arity: 2 },
	'>': { precedence: 5, associativity: Associativity.left, arity: 2 },
	'>=': { precedence: 5, associativity: Associativity.left, arity: 2 },
	'==': { precedence: 6, associativity: Associativity.left, arity: 2 },
	'!=': { precedence: 6, associativity: Associativity.left, arity: 2 },
	//'&': { precedence: 7, associativity: Associativity.left, arity: 2 },
	//'^': { precedence: 7.1, associativity: Associativity.left, arity: 2 },
	//'|': { precedence: 7.2, associativity: Associativity.left, arity: 2 },
	'&&': { precedence: 7.3, associativity: Associativity.left, arity: 2 },
	'||': { precedence: 7.4, associativity: Associativity.left, arity: 2 },
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


export module Lambda {
	export type Lambda = App | Abs | Var | Let | number;
	export class App {
		constructor(public termA: Lambda, public termB: Lambda) { }
		toString = () => `(${this.termA} ${this.termB})`;
	}
	export class Abs {
		constructor(public VSCSUCKSvariable: Var, public term: Lambda) { }
		toString = () => `(λ${this.VSCSUCKSvariable}. ${this.term})`;
	}
	export class Var {
		static map = new Map<string, Var>();
		static get(name: string) {
			if (!Var.map.has(name)) Var.map.set(name, new Var(name));
			return Var.map.get(name);
		}
		private constructor(public name: string) { }
		toString = () => this.name;
	}
	export class Let {
		constructor(public VSCSUCKSletName: Var, public VSCSUCKSletDef: Lambda, public term: Lambda) { }
		toString = () => `let ${this.VSCSUCKSletName} = ${this.VSCSUCKSletDef} in ${this.term}`;
	}

	export function solve(T: Map<Lambda, TypeTerm>, t: Lambda, α: TypeTerm): TypeEquation[] {
		if (T.has(t)) {
			const τ = T.get(t);
			if (τ instanceof PolymorphType) return [[α, τ.instantiate()]];
			return [[α, τ]];
		}
		if (t instanceof App) {
			const [t1, t2] = [t.termA, t.termB];
			const α2 = new UnknownType(), α3 = new UnknownType();
			return [[α3, α2.to(α)], ...solve(T, t1, α3), ...solve(T, t2, α2)];
		} else if (t instanceof Abs) {
			const [x, term] = [t.VSCSUCKSvariable, t.term];
			const α2 = new UnknownType(), α3 = new UnknownType();
			const T2 = new Map(T); T2.set(x, α2);
			return [[α, α2.to(α3)], ...solve(T2, term, α3)];
		} else if (t instanceof Var) {
			return [];
		} else if (t instanceof Let) {
			const α2 = new UnknownType(), α3 = new UnknownType();
			const οLet = unify(solve(T, t.VSCSUCKSletDef, α2));
			const substitutedT = οLet.substituteTypeMap(T);
			const T2 = new Map<Lambda, TypeTerm>([...substitutedT, [t.VSCSUCKSletName, new PolymorphType(οLet.substitute(α2), substitutedT)]]);
			const innerSolution = solve(T2, t.term, α3);
			return [[α, α3], ...οLet, ...innerSolution];
		} else {
			return [[α, new KnownType(typeof t)]];
		}
	}
	export type TypeTerm = KnownType | UnknownType | FuncType | PolymorphType;
	export type TypeContext = Map<Lambda, TypeTerm>;
	export class KnownType {
		constructor(public name: string) { }
		toString = () => this.name;
	}
	export class UnknownType {
		static greek = "αβγδεζηθικλμνξοπρστυφχψω";
		toString(mapping: Map<TypeTerm, number> = new Map()): string {
			if (!mapping.has(this)) mapping.set(this, mapping.size);
			return UnknownType.greek[mapping.get(this)];
		}
		to = (t2: TypeTerm) => new FuncType(this, t2);
	}
	export class FuncType {
		constructor(public from: TypeTerm, public to: TypeTerm) { }
		toString(mapping: Map<TypeTerm, number> = new Map()): string {
			return `(${(this.from as any).toString(mapping)})→(${(this.to as any).toString(mapping)})`;
		}
	}
	export class PolymorphType {
		constructor(public t: TypeTerm, public T: Map<Lambda, TypeTerm>) { }
		instantiate(): KnownType | UnknownType | FuncType {
			const sets = [...this.T.values()].map(x => FV(x)).reduce((a, b) => [...a, ...b], [] as UnknownType[]);
			return PolymorphType.recursiveInstantiate(this.t, new Set(sets), new Map());
		}
		static recursiveInstantiate(t: TypeTerm, T: Set<UnknownType>, existingReplacements: Map<UnknownType, UnknownType>): KnownType | UnknownType | FuncType {
			if (t instanceof FuncType) return new FuncType(PolymorphType.recursiveInstantiate(t.from, T, existingReplacements), PolymorphType.recursiveInstantiate(t.to, T, existingReplacements));
			else if (t instanceof UnknownType) if (!T.has(t)) {
				if (!existingReplacements.has(t)) existingReplacements.set(t, new UnknownType());
				return existingReplacements.get(t);
			} else return t;
			else if (t instanceof KnownType) return t;
			else if (t instanceof PolymorphType) return PolymorphType.recursiveInstantiate(t.t, T, existingReplacements);
		}
	}

	export function FV(t: TypeTerm): Set<UnknownType> {
		if (t instanceof KnownType) return new Set();
		else if (t instanceof UnknownType) return new Set([t]);
		else if (t instanceof PolymorphType) return FV(t.instantiate());
		else return new Set([...FV(t.from), ...FV(t.to)]);
	}

	export type TypeEquation = [TypeTerm, TypeTerm];

	export class Substitution extends Map<UnknownType, TypeTerm>{
		substituteEq([t1, t2]: TypeEquation): TypeEquation {
			return [this.substitute(t1), this.substitute(t2)];
		}
		substitute(term: TypeTerm): TypeTerm {
			if (term instanceof FuncType) return new FuncType(this.substitute(term.from), this.substitute(term.to));
			else if (term instanceof KnownType) return term;
			else if (term instanceof PolymorphType) return this.substitute(term.instantiate());
			else return this.get(term) || term;
		}
		substituteTypeMap(T: Map<Lambda, TypeTerm>) {
			return new Map([...T].map(([k, v]) => [k, this.substitute(v)] as [Lambda, TypeTerm]));
		}
		chain(s2: Substitution): Substitution {
			return new Substitution([...this, ...[...s2].map(([from, to]) => ([from, this.substitute(to)] as [UnknownType, TypeTerm]))])
		}
		toString() {
			return [...this].map(([x, y]) => `(${x.toString()}) ⇨ (${y.toString()})`).join(", ");
		}
	}

	export function unify(C: TypeEquation[]): Substitution {
		if (C.length == 0) return new Substitution();
		else {
			const [[t1, t2], ...C2] = C;
			if (t1 == t2) return unify(C2);
			else if (t1 instanceof UnknownType && !FV(t2).has(t1))
				return unify(C2.map(eq => new Substitution([[t1 as UnknownType, t2]]).substituteEq(eq))).chain(new Substitution([[t1, t2]]));
			else if (t2 instanceof UnknownType && !FV(t1).has(t2))
				return unify(C2.map(eq => new Substitution([[t2 as UnknownType, t1]]).substituteEq(eq))).chain(new Substitution([[t2, t1]]));
			else if (t1 instanceof FuncType && t2 instanceof FuncType)
				return unify([...C2, [t1.from, t2.from], [t1.to, t2.to]]);
			else {
				console.error("unify failed, t1=", t1, "t2=", t2);
				throw Error();
			}
		}
	}

	export function fromTree(t: Tree.Node): Lambda {
		if (t instanceof Tree.NumberNode) return parseFloat(t.number);
		else if (t instanceof Tree.IdentifierNode) return Var.get(t.identifier);
		else if (t instanceof Tree.FunctionCallNode) {
			if (t.fnname === '') return new App(fromTree(t.operands[0]), fromTree(t.operands[1]));
			else if (t.fnname === '=>') return new Abs(fromTree(t.operands[0]) as Var, fromTree(t.operands[1]));
			else if (t.fnname === '=') {
				const x = t as any;
				return new Let(fromTree(x.operands[0].operands[1]) as Var, fromTree(x.operands[1].operands[0].operands[0]), fromTree(x.operands[1].operands[1]));
			}
			else throw Error(t.fnname + ' not supported');
		}
	}
	export function stringToType(s: string) {
		const tree = parse(s);
		const term = fromTree(tree);
		const search = new UnknownType();
		const subs = solve(new Map(), term, search);
		const sub = unify(subs);
		return {
			tree, term, sub,
			type: sub.substitute(search)
		}
	}

	export function test() {
		const v = new Proxy({}, {
			get(_: any, name: string) {
				return Var.get(name);
			}
		});
		const exprs: Lambda[] = [
			new Abs(v.x, v.x),
			new Abs(v.f, new Abs(v.x, new App(new App(v.f, v.x), 2))),
		]
		const a1 = new UnknownType(), a2 = new UnknownType();

		const id = new Abs(v.x, v.x), ChF = new Abs(v.a, new Abs(v.b, v.b));

		const tests: [Lambda, Map<Lambda, TypeTerm>][] = [
			[new App(new App(new App(id, ChF), 1), 2), new Map([[ChF, a1.to(a2.to(a2))]])],
			[new Let(v.f, new Abs(v.x, new App(new App(v.g, v.y), v.y)), new App(v.f, 3)), new Map()],
			[new Let(v.just, new Abs(v.x, new Abs(v.j, new Abs(v.n, new App(v.j, v.x)))), new App(v.just, 0)), new Map()]
		]
		//UnknownType.counter = 1;
		for (const [term, T] of tests) {
			const search = new UnknownType();
			const subs = solve(T, term, search);
			const sub = unify(subs);
			console.log("solveTest", term.toString(), T, subs, sub, sub.toString(), sub.substitute(search));
		}

		for (const expr of exprs) {
			console.log("printTest", expr, expr.toString());
		}
	}
}