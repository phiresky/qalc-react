import UnitNumber from "./UnitNumber";
import DimensionMap from "./DimensionMap";
import Decimal from "decimal.js";
import { TaggedString } from "./output";
import * as Tree from "../libqalc/Tree";

/**
 * unit numbers that are actually functions that are applied using * operator
 * e.g. 10 °C = 10 * °C actually means degC(10)
 *
 * https://i.imgur.com/PLP3ZrJ.jpg
 */
export default class SpecialUnitNumber extends UnitNumber {
	get value(): Decimal {
		throw Error("can't get function.value");
	}
	get dimensions(): DimensionMap {
		throw Error("can't get function.dimensions");
	}
	fn: ((arg: UnitNumber, mode: "left" | "right") => UnitNumber) | null;
	fnTree: Tree.Node | null;
	hasSideEffects: boolean;
	readonly inverse: SpecialUnitNumber;
	constructor(meta: {
		fnTree?: Tree.Node;
		fn?: (arg: UnitNumber, mode: "left" | "right") => UnitNumber;
		inverse?: SpecialUnitNumber;
		id?: string;
		inverseFnTree?: Tree.Node;
		inverseFn?: (arg: UnitNumber, mode: "left" | "right") => UnitNumber;
		hasSideEffects: boolean;
	}) {
		super(null!, null!, meta.id);
		this.fnTree = meta.fnTree || null;
		this.fn = meta.fn || null;
		this.hasSideEffects = meta.hasSideEffects;
		this.inverse =
			meta.inverse ||
			new SpecialUnitNumber({
				fnTree: meta.inverseFnTree,
				fn: meta.inverseFn,
				inverse: this,
				id: meta.id + "^-1",
				hasSideEffects: meta.hasSideEffects,
			});
	}
	withIdentifier(id: string): SpecialUnitNumber {
		return new SpecialUnitNumber({
			fnTree: this.fnTree || undefined,
			fn: this.fn || undefined,
			id,
			inverseFnTree: this.inverse.fnTree || undefined,
			inverseFn: this.inverse.fn || undefined,
			hasSideEffects: this.hasSideEffects,
		});
	}
	mul(other: UnitNumber, reversed = false): UnitNumber {
		if (this.fn) return this.fn(other, reversed ? "right" : "left");
		throw Error(`function not defined: ${this}`);
	}
	div(other: UnitNumber, reversed = false): UnitNumber {
		if (reversed) return this.inverse.mul(other);
		else throw Error(`can't divide function ${this} with ${other}`);
	}
	plus(other: UnitNumber, _factor = 1, _reversed = false): UnitNumber {
		throw Error(`can't add ${this} and ${other}`);
	}
	pow(other: UnitNumber, _reversed = false): UnitNumber {
		other.dimensions.assertEmpty();
		if (other.value.equals(-1)) return this.inverse;
		throw Error(`can't pow ${this} with ${other}`);
	}
	memberFunctionHasSideeffects(member: string, _other: UnitNumber): boolean {
		if (member === "mul" || member === "div") return this.hasSideEffects;
		else return false;
	}
	/** TODO: replace this with normal assignment / replacement? */
	assign(other: UnitNumber) {
		if (other.isSpecial()) {
			this.fn = other.fn;
			this.fnTree = other.fnTree;
			this.hasSideEffects = other.hasSideEffects;
		} else throw Error("can't assign non-function to function");
	}
	isSpecial(): this is SpecialUnitNumber {
		return true;
	}
	toString(): string {
		if (this.id) return this.id;
		else return this.toTaggedString().toString();
	}
	toTaggedString(): TaggedString {
		if (this.id) return new TaggedString(this);
		else return this.fnTree!.toTaggedString();
	}
}
