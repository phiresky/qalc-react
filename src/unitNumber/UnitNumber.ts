import Decimal from "decimal.js";
import DimensionMap from "./DimensionMap";
import Dimension from "./Dimension";
import SpecialUnitNumber from "./SpecialUnitNumber";
import { TaggedString } from "../output";

function dimensionMismatch(
	a: DimensionMap,
	b: DimensionMap,
	diff: DimensionMap,
) {
	throw Error(
		`Dimensions don't match (${a.toString()} vs ${b.toString() || 1}): ` +
			diff.toMismatchString(),
	);
}

export default class UnitNumber {
	static zero = new UnitNumber(0);
	static one = new UnitNumber(1);
	static minusOne = new UnitNumber(-1);
	// @ts-ignore
	readonly value: Decimal;
	// @ts-ignore
	readonly dimensions: DimensionMap;
	readonly id: string | null;
	constructor(
		value: Decimal | number | string,
		dimensions: DimensionMap = new DimensionMap(),
		id?: string | null,
	) {
		// null in specialunitnumber
		if (value !== null) this.value = new Decimal(value);
		if (dimensions !== null) this.dimensions = dimensions;
		this.id = id === undefined ? null : id;
	}
	mul(other: UnitNumber): UnitNumber {
		if (other.isSpecial()) return other.mul(this, true);
		return new UnitNumber(
			this.value.times(other.value),
			DimensionMap.join(
				{ dimensions: this.dimensions, factor: 1 },
				{ dimensions: other.dimensions, factor: 1 },
			),
			null,
		);
	}
	div(other: UnitNumber): UnitNumber {
		if (other.isSpecial()) return other.div(this, true);
		let name: string | null = null;
		//if (this.dimensions.size == 0 && other.dimensions.size == 0)
		//	name = this.value.toString() + "|" + other.value.toString();
		return new UnitNumber(
			this.value.div(other.value),
			DimensionMap.join(
				{ dimensions: this.dimensions, factor: 1 },
				{ dimensions: other.dimensions, factor: -1 },
			),
			name,
		);
	}
	plus(other: UnitNumber, factor = 1): UnitNumber {
		if (other.isSpecial()) return other.plus(this, factor, true);
		const dimensionDifference = this.div(other).dimensions;
		if (dimensionDifference.size > 0)
			throw dimensionMismatch(
				this.dimensions,
				other.dimensions,
				dimensionDifference,
			);
		return new UnitNumber(
			this.value.plus(other.value.times(factor)),
			this.dimensions,
		);
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
	assign(_unit: UnitNumber) {
		throw Error("Can't assign value to " + this);
	}
	toString(): string {
		if (this.id) return this.id;
		else return this.toTaggedString().toString();
	}
	toTaggedString() {
		if (this.id) return new TaggedString(this);
		else {
			if (this.value.equals(1) && this.dimensions.size == 0)
				return new TaggedString("1");
			const v = this.value.equals(1) ? "" : this.value.toPrecision(10);
			return TaggedString.t`${v}${
				v && this.dimensions.size > 0 ? " " : ""
			}${this.dimensions.toTaggedString()}`;
		}
	}
	pow(factor: number | Decimal | UnitNumber): UnitNumber {
		if (typeof factor === "number" || factor instanceof Decimal)
			return new UnitNumber(
				this.value.pow(factor),
				DimensionMap.join({
					dimensions: this.dimensions,
					factor:
						typeof factor === "number" ? factor : factor.toNumber(),
				}),
			);
		else if (factor.isSpecial()) return factor.pow(this, true);
		else if (factor.dimensions.size > 0)
			throw Error("power must be dimensionless");
		else return this.pow(factor.value);
	}
	convertTo(unit: UnitNumber): UnitNumber {
		const d = this.div(unit);
		if (d.dimensions.size > 0)
			throw Error(
				"Dimensions don't match: " + d.dimensions.toMismatchString(),
			);
		return d.mul(unit);
	}
	static createBaseUnit(dimensionName: string) {
		return new Dimension(dimensionName).baseUnit;
	}
}
