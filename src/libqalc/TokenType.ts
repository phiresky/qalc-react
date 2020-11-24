export const Identifier = "Identifier";
export type IdentifierT = typeof Identifier;
export const Number = "Number";
export type TNumber = typeof Number;
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

export type TokenType =
	| IdentifierT
	| TNumber
	| LParen
	| RParen
	| Operator
	| Whitespace
	| Unknown;
