import UnitNumber from "./UnitNumber";
import DimensionMap from "./DimensionMap";
import Decimal from "decimal.js";
import { TaggedString } from "../output";
import * as Tree from "../libqalc/Tree";

export default class SpecialUnitNumber extends UnitNumber {
	get value(): Decimal {
		throw Error("can't get function.value");
	}
	get dimensions(): DimensionMap {
		throw Error("can't get function.dimensions");
	}
	fn: ((arg: UnitNumber) => UnitNumber) | null;
	fnTree: Tree.Node | null;
	readonly inverse: SpecialUnitNumber;
	constructor(
		fnTree: Tree.Node | null,
		fn: ((arg: UnitNumber) => UnitNumber) | null,
		inverse: SpecialUnitNumber | null,
		id: string | null,
		inverseFnTree: Tree.Node | null = null,
		inverseFn: ((arg: UnitNumber) => UnitNumber) | null = null,
	) {
		super(null!, null!, id);
		this.fnTree = fnTree;
		this.fn = fn;
		this.inverse =
			inverse ||
			new SpecialUnitNumber(inverseFnTree, inverseFn, this, id + "^-1");
	}
	withIdentifier(id: string): SpecialUnitNumber {
		return new SpecialUnitNumber(
			this.fnTree,
			this.fn,
			null,
			id,
			this.inverse.fnTree,
			this.inverse.fn,
		);
	}
	mul(other: UnitNumber, _reversed = false): UnitNumber {
		if (this.fn) return this.fn(other);
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
	assign(other: UnitNumber) {
		if (other.isSpecial()) {
			this.fn = other.fn;
			this.fnTree = other.fnTree;
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
