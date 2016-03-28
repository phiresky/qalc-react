import Decimal from 'decimal.js';

export class TaggedString {
	readonly vals: TaggedStringEle[];
	constructor(...vals: TaggedStringEle[]) {
		this.vals = vals;
	}
	append(t: TaggedStringEle) {
		if(t instanceof TaggedString) this.vals.push(...t.vals);
		else this.vals.push(t);
		return this;
	}
	toString() {
		return this.vals.join("");
	}
	flatten() {
		for(let i = 0; i < this.vals.length; i++) {
			const v = this.vals[i];
			if(v instanceof TaggedString) {
				v.flatten();
				this.vals.splice(i, 1, ...(this.vals[i] as TaggedString).vals);
			}
		}
	}
	// template function creating an array containing strings and UnitNumbers for linking to definitions in the gui
	static t(literals: string[], ...placeholders:(UnitNumber|string|TaggedString)[]): TaggedString {
		let result:(UnitNumber|string)[] = [];
		for (let i = 0; i < placeholders.length; i++) {
			if(literals[i].length > 0) result.push(literals[i]);
			if(placeholders[i] instanceof Array) result.push(...(placeholders[i] as any));
			else result.push(placeholders[i] as any);
		}
		const last = literals[literals.length - 1];
		if(last.length > 0) result.push(last);
		return new TaggedString(...result);
	}
	static join(str: TaggedStringEle[], joinEle: TaggedStringEle) {
		if(str.length === 0) return new TaggedString();
		const out:TaggedStringEle[] = [str[0]];
		for(let i = 1; i < str.length; i++) {
			out.push(joinEle, str[i]);
		}
		return new TaggedString(...out);
	}
}

type TaggedStringEle = (UnitNumber|string|TaggedString);

// maps from dimension id to exponent
// e.g.  m/s^2 has dimension map {m => 1, s => -2}
class DimensionMap extends Map<DimensionId, number> {
	private static unicodePow = '⁰¹²³⁴⁵⁶⁷⁸⁹';
	static toUnicodePow(x: number) {
		if(x === 1) return "";
		return x.toString().split("").map(x => DimensionMap.unicodePow[+x]).join("");
	}
	static listToUnicodePow(entries: [DimensionId, number][]): TaggedString {
		return TaggedString.join(entries.map(([id, exp]) => TaggedString.t`${Dimension.get(id).baseUnit}${DimensionMap.toUnicodePow(exp)}`), " ");
	}
	toString(): string {
		return this.toTaggedString()+"";
	}
	toTaggedString(): TaggedString {
		const {pos, neg} = this.splitPosNeg();
		let str = DimensionMap.listToUnicodePow(pos);
		if(neg.length > 0) {
			str.vals.push(" / ");
			str.append(DimensionMap.listToUnicodePow(neg));
		}
		return str;
	}
	splitPosNeg() {
		const pos = [...this].filter(([id, exp]) => exp > 0);
		const neg = [...this].filter(([id, exp]) => exp < 0); neg.forEach(x => x[1]*=-1);
		return {pos, neg};
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
		const {pos:tooMuch, neg:notEnough} = this.splitPosNeg();
		if(tooMuch.length === 0) return "missing "+new DimensionMap(notEnough);
		if(notEnough.length === 0) return "don't want "+new DimensionMap(tooMuch);
		return `have ${new DimensionMap(tooMuch)}, want ${new DimensionMap(notEnough)}`;
	}
}

type NumberSource = {fn: string, args: UnitNumber[]};

export class UnitNumber {
	readonly value: decimal.Decimal;
	readonly dimensions: DimensionMap;
	readonly id: string;
	readonly source: NumberSource;
	constructor(value: decimal.Decimal | number | string, dimensions: DimensionMap = new DimensionMap(), source: NumberSource = undefined, id: string = undefined) {
		this.value = Decimal(value);
		this.dimensions = dimensions;
		this.id = id;
		this.source = source;
	}
	mul(other: UnitNumber) {
		return new UnitNumber(this.value.times(other.value), DimensionMap.join(
			{ dimensions: this.dimensions, factor: 1 },
			{ dimensions: other.dimensions, factor: 1 }
		), {fn:"·", args:[this, other]});
	}
	div(other: UnitNumber) {
		let name:string = undefined;
		if(this.dimensions.size == 0 && other.dimensions.size == 0) name = this.value.toString()+"|"+other.value.toString();
		return new UnitNumber(this.value.div(other.value), DimensionMap.join(
			{ dimensions: this.dimensions, factor: 1 },
			{ dimensions: other.dimensions, factor: -1 }
		), {fn:"/", args:[this, other]}, name);
	}
	plus(other: UnitNumber, factor = 1) {
		const dimensionDifference = this.div(other).dimensions;
		if (dimensionDifference.size > 0) throw Error("Dimensions don't match: " + dimensionDifference.toMismatchString());
		return new UnitNumber(this.value.plus(other.value.times(factor)), this.dimensions, {fn:factor==1?"+":"-", args:[this, other]});
	}
	minus(other: UnitNumber) {
		return this.plus(other, -1);
	}
	withIdentifier(id: string) {
		return new UnitNumber(this.value, this.dimensions, {fn:"==", args:[this]}, id);
	}
	toString(depth = 0): string {
		if(this.id) return this.id;
		else {
			const v = this.value.equals(1)?"":this.value.toString();
			const d = this.dimensions.toString();
			if(!v&&!d) return "1";
			return `${v}${v&&d?" ":""}${d}`;
		}
	}
	toTaggedString(): TaggedString {
		if(this.id) return new TaggedString(this);
		else {
			const v = this.value.equals(1)?"":this.value.toString();
			const d = this.dimensions.toTaggedString();
			if(!v && d.vals.length == 0) return TaggedString.t`1`;
			return TaggedString.t`${v}${v&&d.vals.length>0?" ":""}${d}`;
		}
	}
	toTaggedDefinitionOld(): TaggedString {
		if(!this.source) {
			if(this.dimensions.size === 0) return this.toTaggedString().append(" (dimensionless)");
			return new TaggedString(this);
		} else {
			if(this.source.fn == '==')
				return this.source.args[0].toTaggedDefinitionOld();
			else return TaggedString.t`${this.source.args[0].toTaggedString()} ${this.source.fn} ${this.source.args[1].toTaggedString()}`;
		}
	}
	toTaggedTilNamed(): TaggedString {
		if(this.id || !this.source) return this.toTaggedString();
		else {
			if(this.source.fn == '==')
				return this.source.args[0].toTaggedTilNamed();
			else return TaggedString.t`${this.source.args[0].toTaggedTilNamed()} ${this.source.fn} ${this.source.args[1].toTaggedTilNamed()}`;
		}
	}
	toTaggedDefinition(): TaggedString {
		if(!this.source) return this.toTaggedString();
		if(this.source.fn == '==')
			return TaggedString.t`${this} = ${this.source.args[0].toTaggedDefinition()}`;
		if(this.source.fn == 'to')
			return TaggedString.t`${new UnitNumber(this.source.args[0].value).mul(this.source.args[1]).toTaggedDefinition()}`;
		else return TaggedString.t`${this.source.args[0].toTaggedTilNamed()} ${this.source.fn} ${this.source.args[1].toTaggedTilNamed()}`;
	}
	pow(factor: number | decimal.Decimal | UnitNumber): UnitNumber {
		if (typeof factor === 'number' || factor instanceof Decimal)
			return new UnitNumber(this.value.pow(factor), DimensionMap.join({ dimensions: this.dimensions, factor: typeof factor === 'number' ? factor : factor.toNumber() }), {fn:"^", args:[this, new UnitNumber(factor)]});
		else if (factor.dimensions.size > 0) throw Error("power must be dimensionless");
		else return this.pow(factor.value);
	}
	convertTo(unit: UnitNumber): UnitNumber {
		const d = this.div(unit);
		if (d.dimensions.size > 0) throw Error("Dimensions don't match: " + d.dimensions.toMismatchString());
		const d2 = d.mul(unit);
		d2.source.fn = "to";
		d2.source.args = [d, unit];
		return d2;
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
		this.baseUnit = new UnitNumber(1, new DimensionMap([[this.id, 1]]), undefined, this.name);
	}
}