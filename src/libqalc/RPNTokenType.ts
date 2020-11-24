export const Identifier2 = "Identifier";
export type Identifier = typeof Identifier2;
export const Number = "Number";
export type TNumber = typeof Number;
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

export type RPNTokenType =
	| Identifier
	| TNumber
	| LParen
	| RParen
	| UnaryOperator
	| InfixOperator
	| Whitespace
	| Unknown;
