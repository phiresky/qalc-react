import Decimal from 'decimal.js';

// maps from dimension id to exponent
// e.g.  m/s^2 has dimension map {m => 1, s => -2}
class DimensionMap extends Map<DimensionId, number> {
	toString() {
		return [...this].map(([id, exp]) => `${Dimension.get(id).name}^${exp}`).join(" ");
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
		return new UnitNumber(this.value.div(other.value), DimensionMap.join(
			{ dimensions: this.dimensions, factor: 1 },
			{ dimensions: other.dimensions, factor: -1 }
		));
	}
	plus(other: UnitNumber, factor = 1) {
		const dimensionDifference = this.div(other).dimensions;
		if (dimensionDifference.size > 0) throw Error("Dimensions don't match: " + dimensionDifference);
		return new UnitNumber(this.value.plus(other.value.times(factor)), this.dimensions);
	}
	minus(other: UnitNumber) {
		return this.plus(other, -1);
	}
	withIdentifier(id: string) {
		return new UnitNumber(this.value, this.dimensions, id);
	}
	toString() {
		if (this.id !== undefined) return this.id;
		else return `${this.value} ${this.dimensions}`;
	}
	pow(factor: number | decimal.Decimal | UnitNumber): UnitNumber {
		if (typeof factor === 'number' || factor instanceof Decimal)
			return new UnitNumber(this.value.pow(factor), DimensionMap.join({ dimensions: this.dimensions, factor: typeof factor === 'number' ? factor : factor.toNumber() }));
		else if (factor.dimensions.size > 0) throw Error("power must be dimensionless");
		else return this.pow(factor.value);
	}
	convertTo(unit: UnitNumber): UnitNumber {
		const d = this.div(unit);
		if (d.dimensions.size > 0) throw Error("Dimensions don't match: " + d.dimensions);
		return d;
	}
	static createBaseUnit(dimensionName: string) {
		const dimension = new Dimension(dimensionName);
		const map = new DimensionMap(); map.set(dimension.id, 1);
		return new UnitNumber(1, map);
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
	constructor(name: string) {
		this.id = Dimension.dimensions.size as DimensionId;
		this.name = name;
		Dimension.dimensions.set(this.id, this);
	}
}