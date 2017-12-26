import Decimal from 'decimal.js';
import {Tree} from './parser';
import {TaggedString} from './output';
export type EvaluatedNode = Tree.Node & { value: UnitNumber };

// maps from dimension id to exponent
// e.g.  m/s^2 has dimension map {m => 1, s => -2}
class DimensionMap extends Map<DimensionId, number> {
	private static unicodePow = '⁰¹²³⁴⁵⁶⁷⁸⁹';
	static toUnicodePow(x: number) {
		if (x === 1) return "";
		return x.toString().split("").map(x => DimensionMap.unicodePow[+x]).join("");
	}
	static listToUnicodePow(entries: [DimensionId, number][]): TaggedString {
		return TaggedString.join(entries.map(([id, exp]) => TaggedString.t`${Dimension.get(id)!.baseUnit}${DimensionMap.toUnicodePow(exp)}`), " ");
	}
	toString(): string {
		return this.toTaggedString() + "";
	}
	toTaggedString(): TaggedString {
		const {pos, neg} = this.splitPosNeg();
		let str = DimensionMap.listToUnicodePow(pos);
		if (neg.length > 0) {
			str.vals.push(" / ");
			str.append(DimensionMap.listToUnicodePow(neg));
		}
		return str;
	}
	splitPosNeg() {
		const pos = [...this].filter(([id, exp]) => exp > 0);
		const neg = [...this].filter(([id, exp]) => exp < 0); neg.forEach(x => x[1] *= -1);
		return { pos, neg };
	}
	static join(...list: { dimensions: DimensionMap, factor: number }[]) {
		const map: DimensionMap = new DimensionMap();
		for (const {dimensions, factor} of list) {
			for (const [dimension, exponent] of dimensions) {
				const newFactor = (map.get(dimension) || 0) + exponent * factor;
				if (newFactor === 0) map.delete(dimension);
				else map.set(dimension, newFactor);
			}
		}
		return map;
	}
	assertEmpty(str = "") {
		if (this.size > 0) throw Error(str + " must be dimensionless");
	}
	equals(d: DimensionMap) {
		const diff = DimensionMap.join({dimensions:this, factor:1}, {dimensions:d, factor:-1});
		return diff.size === 0; 
	}
	assertEqual(d: DimensionMap) {
		if(!this.equals(d)) throw Error("dimensions must be the same");
	}
	toMismatchString() {
		const {pos: tooMuch, neg: notEnough} = this.splitPosNeg();
		if (tooMuch.length === 0) return "missing " + new DimensionMap(notEnough);
		if (notEnough.length === 0) return "don't want " + new DimensionMap(tooMuch);
		return `have ${new DimensionMap(tooMuch)}, want ${new DimensionMap(notEnough)}`;
	}
}

export class UnitNumber {
	readonly value: Decimal;
	readonly dimensions: DimensionMap;
	readonly id: string | null;
	constructor(value: Decimal | number | string | null, dimensions: DimensionMap | null = new DimensionMap(), id?: string | null) {
		if (value !== null) this.value = new Decimal(value);
		if (dimensions !== null) this.dimensions = dimensions;
		this.id = id === undefined ? null : id;
	}
	mul(other: UnitNumber): UnitNumber {
		if (other.isSpecial()) return other.mul(this, true);
		return new UnitNumber(this.value.times(other.value), DimensionMap.join(
			{ dimensions: this.dimensions, factor: 1 },
			{ dimensions: other.dimensions, factor: 1 }
		), null);
	}
	div(other: UnitNumber): UnitNumber {
		if (other.isSpecial()) return other.div(this, true);
		let name: string | null = null;
		if (this.dimensions.size == 0 && other.dimensions.size == 0) name = this.value.toString() + "|" + other.value.toString();
		return new UnitNumber(this.value.div(other.value), DimensionMap.join(
			{ dimensions: this.dimensions, factor: 1 },
			{ dimensions: other.dimensions, factor: -1 }
		), name);
	}
	plus(other: UnitNumber, factor = 1): UnitNumber {
		if (other.isSpecial()) return other.plus(this, factor, true);
		const dimensionDifference = this.div(other).dimensions;
		if (dimensionDifference.size > 0) throw Error("Dimensions don't match: " + dimensionDifference.toMismatchString());
		return new UnitNumber(this.value.plus(other.value.times(factor)), this.dimensions);
	}
	minus(other: UnitNumber) {
		return this.plus(other, -1);
	}
	withIdentifier(id: string) {
		return new UnitNumber(this.value, this.dimensions, id);
	}
	isSpecial(): this is SpecialUnitNumber {
		return false;
	}
	assign(unit: UnitNumber) {
		throw Error("Can't assign value to " + this);
	}
	toString(): string {
		if (this.id) return this.id;
		else return this.toTaggedString().toString();
	}
	toTaggedString() {
		if (this.id) return new TaggedString(this);
		else {
			if (this.value.equals(1) && this.dimensions.size == 0) return new TaggedString("1");
			const v = this.value.equals(1) ? "" : this.value.toPrecision(10);
			return TaggedString.t`${v}${v && this.dimensions.size > 0 ? " " : ""}${this.dimensions.toTaggedString()}`;
		}
	}
	pow(factor: number | Decimal | UnitNumber): UnitNumber {
		if (typeof factor === 'number' || factor instanceof Decimal)
			return new UnitNumber(this.value.pow(factor), DimensionMap.join({ dimensions: this.dimensions, factor: typeof factor === 'number' ? factor : factor.toNumber() }));
		else if (factor.isSpecial()) return factor.pow(this, true);
		else if (factor.dimensions.size > 0) throw Error("power must be dimensionless");
		else return this.pow(factor.value);
	}
	convertTo(unit: UnitNumber): UnitNumber {
		const d = this.div(unit);
		if (d.dimensions.size > 0) throw Error("Dimensions don't match: " + d.dimensions.toMismatchString());
		return d.mul(unit);
	}
	static createBaseUnit(dimensionName: string) {
		return new Dimension(dimensionName).baseUnit;
	}
}

export class SpecialUnitNumber extends UnitNumber {
	get value(): Decimal { throw Error("can't get function.value") }
	get dimensions(): DimensionMap { throw Error("can't get function.dimensions") }
	fn: ((arg: UnitNumber) => UnitNumber) | null;
	fnTree: Tree.Node | null;
	readonly inverse: SpecialUnitNumber;
	constructor(fnTree: Tree.Node | null, fn: ((arg: UnitNumber) => UnitNumber) | null, inverse: SpecialUnitNumber | null, id: string | null, inverseFnTree: Tree.Node | null = null, inverseFn: ((arg: UnitNumber) => UnitNumber) | null = null) {
		super(null, null, id);
		this.fnTree = fnTree;
		this.fn = fn;
		this.inverse = inverse || new SpecialUnitNumber(inverseFnTree, inverseFn, this, id + "^-1");
	}
	withIdentifier(id: string, alsoInverseId = true): SpecialUnitNumber {
		return new SpecialUnitNumber(this.fnTree, this.fn, null, id, this.inverse.fnTree, this.inverse.fn);
	}
	mul(other: UnitNumber, reversed = false): UnitNumber {
		if (this.fn) return this.fn(other);
		throw Error(`function not defined: ${this}`);
	}
	div(other: UnitNumber, reversed = false): UnitNumber {
		if (reversed) return this.inverse.mul(other);
		else throw Error(`can't divide function ${this} with ${other}`)
	}
	plus(other: UnitNumber, factor = 1, reversed = false): UnitNumber {
		throw Error(`can't add ${this} and ${other}`);
	}
	pow(other: UnitNumber, reversed = false): UnitNumber {
		other.dimensions.assertEmpty();
		if (other.value.equals(-1)) return this.inverse;
		throw Error(`can't pow ${this} with ${other}`);
	}
	assign(other: UnitNumber) {
		if (other.isSpecial()) {this.fn = other.fn; this.fnTree = other.fnTree; }
		else throw Error("can't assign non-function to function");
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

// <hack href="https://github.com/Microsoft/TypeScript/issues/202">
module AsDimensionId { export const enum Brand { } }
interface AsDimensionId { '': AsDimensionId.Brand; }
type DimensionId = number & AsDimensionId;
// </hack>

class Dimension {
	private static dimensions = new Map<DimensionId, Dimension>();
	static get(id: DimensionId) { return Dimension.dimensions.get(id); }
	readonly id: DimensionId;
	readonly name: string;
	readonly baseUnit: UnitNumber;
	constructor(name: string) {
		this.id = Dimension.dimensions.size as DimensionId;
		this.name = name;
		Dimension.dimensions.set(this.id, this);
		this.baseUnit = new UnitNumber(1, new DimensionMap([[this.id, 1]]), this.name);
	}
}