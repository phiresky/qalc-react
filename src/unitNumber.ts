import Decimal from 'decimal.js';
import {Tree} from './parser';
import {TaggedString} from './output';
export type EvaluatedNode = Tree.Node & {value: UnitNumber};


// maps from dimension id to exponent
// e.g.  m/s^2 has dimension map {m => 1, s => -2}
class DimensionMap extends Map<DimensionId, number> {
	private static unicodePow = '⁰¹²³⁴⁵⁶⁷⁸⁹';
	static toUnicodePow(x: number) {
		if (x === 1) return "";
		return x.toString().split("").map(x => DimensionMap.unicodePow[+x]).join("");
	}
	static listToUnicodePow(entries: [DimensionId, number][]): TaggedString {
		return TaggedString.join(entries.map(([id, exp]) => TaggedString.t`${Dimension.get(id).baseUnit}${DimensionMap.toUnicodePow(exp)}`), " ");
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
	toMismatchString() {
		const {pos: tooMuch, neg: notEnough} = this.splitPosNeg();
		if (tooMuch.length === 0) return "missing " + new DimensionMap(notEnough);
		if (notEnough.length === 0) return "don't want " + new DimensionMap(tooMuch);
		return `have ${new DimensionMap(tooMuch)}, want ${new DimensionMap(notEnough)}`;
	}
}

export class UnitNumber {
	readonly value: decimal.Decimal;
	readonly dimensions: DimensionMap;
	readonly id: string;
	constructor(value: decimal.Decimal | number | string, dimensions: DimensionMap = new DimensionMap(), id: string = undefined) {
		this.value = Decimal(value);
		this.dimensions = dimensions;
		this.id = id;
	}
	mul(other: UnitNumber) {
		return new UnitNumber(this.value.times(other.value), DimensionMap.join(
			{ dimensions: this.dimensions, factor: 1 },
			{ dimensions: other.dimensions, factor: 1 }
		));
	}
	div(other: UnitNumber) {
		let name: string = undefined;
		if (this.dimensions.size == 0 && other.dimensions.size == 0) name = this.value.toString() + "|" + other.value.toString();
		return new UnitNumber(this.value.div(other.value), DimensionMap.join(
			{ dimensions: this.dimensions, factor: 1 },
			{ dimensions: other.dimensions, factor: -1 }
		), name);
	}
	plus(other: UnitNumber, factor = 1) {
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
	toString(depth = 0): string {
		if (this.id) return this.id;
		else {
			const v = this.value.equals(1) ? "" : this.value.toString();
			const d = this.dimensions.toString();
			if (!v && !d) return "1";
			return `${v}${v && d ? " " : ""}${d}`;
		}
	}
	pow(factor: number | decimal.Decimal | UnitNumber): UnitNumber {
		if (typeof factor === 'number' || factor instanceof Decimal)
			return new UnitNumber(this.value.pow(factor), DimensionMap.join({ dimensions: this.dimensions, factor: typeof factor === 'number' ? factor : factor.toNumber() }));
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