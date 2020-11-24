import Dimension, { DimensionId } from "./Dimension";
import { TaggedString } from "./output";

/**
 * maps from dimension id to exponent
 * e.g.  m/s^2 has dimension map {m => 1, s => -2}
 */
export default class DimensionMap extends Map<DimensionId, number> {
	private static unicodePow = "⁰¹²³⁴⁵⁶⁷⁸⁹";
	static toUnicodePow(x: number): string {
		if (x === 1) return "";
		return x
			.toString()
			.split("")
			.map((x) => (x === "." ? "⋅" : DimensionMap.unicodePow[+x]))
			.join("");
	}
	static listToUnicodePow(entries: [DimensionId, number][]): TaggedString {
		return TaggedString.join(
			entries.map(
				([id, exp]) =>
					TaggedString.t`${
						Dimension.get(id)!.baseUnit
					}${DimensionMap.toUnicodePow(exp)}`,
			),
			" ",
		);
	}
	toString(): string {
		return this.toTaggedString().toString();
	}
	toTaggedString(): TaggedString {
		const { pos, neg } = this.splitPosNeg();
		const str = DimensionMap.listToUnicodePow(pos);
		if (neg.length > 0) {
			str.vals.push(" / ");
			str.append(DimensionMap.listToUnicodePow(neg));
		}
		return str;
	}
	splitPosNeg(): {
		neg: [DimensionId, number][];
		pos: [DimensionId, number][];
	} {
		const pos = [...this].filter(([, exp]) => exp > 0);
		const neg = [...this].filter(([, exp]) => exp < 0);
		neg.forEach((x) => (x[1] *= -1));
		return { pos, neg };
	}
	static join(
		...list: { dimensions: DimensionMap; factor: number }[]
	): DimensionMap {
		const map: DimensionMap = new DimensionMap();
		for (const { dimensions, factor } of list) {
			for (const [dimension, exponent] of dimensions) {
				const newFactor = (map.get(dimension) || 0) + exponent * factor;
				if (newFactor === 0) map.delete(dimension);
				else map.set(dimension, newFactor);
			}
		}
		return map;
	}
	assertEmpty(str = ""): void {
		if (this.size > 0) throw Error(str + " must be dimensionless");
	}
	equals(d: DimensionMap): boolean {
		const diff = DimensionMap.join(
			{ dimensions: this, factor: 1 },
			{ dimensions: d, factor: -1 },
		);
		return diff.size === 0;
	}
	assertEqual(d: DimensionMap): void {
		if (!this.equals(d)) throw Error("dimensions must be the same");
	}
	toMismatchString(): string {
		const { pos: tooMuch, neg: notEnough } = this.splitPosNeg();
		if (tooMuch.length === 0)
			return "missing " + new DimensionMap(notEnough).toString();
		if (notEnough.length === 0)
			return "don't want " + new DimensionMap(tooMuch).toString();
		return `have ${new DimensionMap(
			tooMuch,
		).toString()}, want ${new DimensionMap(notEnough).toString()}`;
	}
}
