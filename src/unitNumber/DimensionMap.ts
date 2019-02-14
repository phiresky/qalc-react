import Dimension, { DimensionId } from "./Dimension";
import { TaggedString } from "./output";

/**
 * maps from dimension id to exponent
 * e.g.  m/s^2 has dimension map {m => 1, s => -2}
 */
export default class DimensionMap extends Map<DimensionId, number> {
	private static unicodePow = "⁰¹²³⁴⁵⁶⁷⁸⁹";
	static toUnicodePow(x: number) {
		if (x === 1) return "";
		return x
			.toString()
			.split("")
			.map(x => (x === "." ? "⋅" : DimensionMap.unicodePow[+x]))
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
		return this.toTaggedString() + "";
	}
	toTaggedString(): TaggedString {
		const { pos, neg } = this.splitPosNeg();
		let str = DimensionMap.listToUnicodePow(pos);
		if (neg.length > 0) {
			str.vals.push(" / ");
			str.append(DimensionMap.listToUnicodePow(neg));
		}
		return str;
	}
	splitPosNeg() {
		const pos = [...this].filter(([_id, exp]) => exp > 0);
		const neg = [...this].filter(([_id, exp]) => exp < 0);
		neg.forEach(x => (x[1] *= -1));
		return { pos, neg };
	}
	static join(...list: { dimensions: DimensionMap; factor: number }[]) {
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
	assertEmpty(str = "") {
		if (this.size > 0) throw Error(str + " must be dimensionless");
	}
	equals(d: DimensionMap) {
		const diff = DimensionMap.join(
			{ dimensions: this, factor: 1 },
			{ dimensions: d, factor: -1 },
		);
		return diff.size === 0;
	}
	assertEqual(d: DimensionMap) {
		if (!this.equals(d)) throw Error("dimensions must be the same");
	}
	toMismatchString() {
		const { pos: tooMuch, neg: notEnough } = this.splitPosNeg();
		if (tooMuch.length === 0)
			return "missing " + new DimensionMap(notEnough);
		if (notEnough.length === 0)
			return "don't want " + new DimensionMap(tooMuch);
		return `have ${new DimensionMap(tooMuch)}, want ${new DimensionMap(
			notEnough,
		)}`;
	}
}
