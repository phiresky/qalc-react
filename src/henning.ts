export class Conversion {
    public readonly sourceUnit: Unit;
    public readonly targetUnit: Unit;
    public readonly offset: number;
    public readonly factor: number;
    constructor(sourceUnit: Unit, targetUnit: Unit, factor: number, offset: number) {
        this.sourceUnit = sourceUnit;
        this.targetUnit = targetUnit;
        this.offset = offset;
        this.factor = factor;
    }
    inverse(): Conversion {
        // r = fx + o
        // r - o = fx => x = r/f - o/f
        return new Conversion(this.targetUnit, this.sourceUnit, 1 / this.factor, -this.offset / this.factor);
    }
    chain(conversion: Conversion) {
        
        // (this o conversion)(x) = this(conversion(x))
        // = this(c.f*x + c.o) = t.f * c.f * x + t.f * c.o + t.o
        if (!conversion.targetUnit.equals(this.sourceUnit))
            throw new Error("Invalid conversion!");
        return new Conversion(conversion.sourceUnit, this.targetUnit,
            this.factor * conversion.factor,
            this.factor * conversion.offset + this.offset);
    }
    convert(value: number): number {
        return value * this.factor + this.offset;
    }
}
export class UnitIdentifier {
	public readonly id: string;
    public readonly name: string;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
    toString(): string { return this.id; }
}
export abstract class Unit {
    static getDimensionless(): Unit { return DerivedUnit.create([]); }
    public readonly identifier: UnitIdentifier;
    constructor(identifier: UnitIdentifier = null) {
        this.identifier = identifier;
    }
    withId(id: string, name: string = null): Unit {
        return this.withIdentifier(new UnitIdentifier(id, name));
    }
    abstract withIdentifier(identifier: UnitIdentifier): Unit;
    getHashCode(): string {
        return this.toString();
    }
    toString(): string {
        if (this.identifier === null)
            return "(unnamed)";
        return this.identifier.toString();
    }
    abstract getConversionToCoherent(linearConversion?: boolean): Conversion;
    equals(other: Unit): boolean {
        return this.getHashCode() === other.getHashCode();
    }
    mul(factor: number | Unit): Unit {
        if (typeof factor === "number") {
            return new ScaledShiftedUnit(this, factor, 0);
        } else {
            return DerivedUnit.create([new UnitPart(this, 1), new UnitPart(factor, 1)]);
        }
    }
    div(factor: number | Unit): Unit {
        if (typeof factor === "number") {
            return new ScaledShiftedUnit(this, 1 / factor, 0);
        } else {
            return DerivedUnit.create([new UnitPart(this, 1), new UnitPart(factor, -1)]);
        }
    }
	pow(factor: number | Unit): Unit {
		const b = typeof factor === "number" ? factor : factor.convertToSeparate(Unit.getDimensionless()).value;
		return DerivedUnit.create([new UnitPart(this, b)]);
	}
	minus(minand: Unit): Unit {
		const thisIs0 = this.getConversionToCoherent().factor === 0;
		if(thisIs0) return minand.mul(-1);
		const minandAsThis = minand.convertToSeparate(this);
		return this.mul(1 - minandAsThis.value);
	}
	plus(plusand: Unit): Unit {
		return this.mul(1 + plusand.convertToSeparate(this).value);
	}
	convertTo(targetUnit: Unit) {
		const x = this.convertToSeparate(targetUnit);
		return x.unit.mul(x.value);
	}
	convertToSeparate(targetUnit: Unit): {value: number, unit:Unit} {
        const t1 = this.getConversionToCoherent();
        const t2 = targetUnit.getConversionToCoherent();
        if (!t1.targetUnit.equals(t2.targetUnit))
            throw Error(t1.targetUnit +" != "+t2.targetUnit);
        const t3 = t2.inverse().chain(t1);
        return {value:t3.convert(1), unit: t3.targetUnit};
    }
}
export class BaseUnit extends Unit {
    private static count = 0;
    private _c = 0;
    constructor(identifier: UnitIdentifier = null) {
        super(identifier);
        this._c = BaseUnit.count++;
    }
    toString(): string {
        if (this.identifier !== null)
            return super.toString();
        return `(${this._c})`;
    }
    withIdentifier(identifier: UnitIdentifier): Unit {
        return new BaseUnit(identifier);
    }
    getConversionToCoherent(linearConversion?: boolean): Conversion {
        return new Conversion(this, this, 1, 0);
    }
}
export class ScaledShiftedUnit extends Unit {
    public readonly offset: number;
    public readonly factor: number;
    public readonly underlayingUnit: Unit;
    constructor(underlayingUnit: Unit, factor: number, offset: number, ident: UnitIdentifier = null) {
        super(ident);
        this.underlayingUnit = underlayingUnit;
        this.offset = offset;
        this.factor = factor;
    }
    toString(): string {
        if (this.identifier !== null)
            return super.toString();
        if (this.offset === 0)
            return "" + this.factor + " " + this.underlayingUnit.toString();
        else
            return "" + this.factor + " "+ this.underlayingUnit.toString() + "+" + this.offset + this.underlayingUnit.toString();
    }
    withIdentifier(identifier: UnitIdentifier): Unit {
        return new ScaledShiftedUnit(this.underlayingUnit, this.factor, this.offset, identifier);
    }
    getConversionToCoherent(linearConversion?: boolean): Conversion {
        if (linearConversion && this.offset !== 0)
            return new Conversion(this, this, 1, 0);
        return this.underlayingUnit.getConversionToCoherent().chain(
            new Conversion(this, this.underlayingUnit, this.factor, this.offset));
    }
}
class DerivedUnit extends Unit {
    static create(parts: UnitPart[], identifier: UnitIdentifier = null): Unit {
        const units: { [hash: string]: UnitPart } = {};
        parts.forEach(p => {
            var hash = p.unit.getHashCode();
            let old = units[hash];
            if (typeof (old) === "undefined")
                units[hash] = p;
            else {
                if (!old.unit.equals(p.unit))
                    return null;
                units[hash] = new UnitPart(old.unit, old.exponent + p.exponent);
            }
        });
        const newParts: UnitPart[] = [];
        for (var hash in units) {
            if (units[hash].exponent !== 0)
                newParts.push(units[hash]);
        }
        if (newParts.length === 1 && newParts[0].exponent === 1)
            return newParts[0].unit;
        return new DerivedUnit("uiaenrdt", newParts, identifier);
    }
    public readonly parts: UnitPart[];
    // don't call the constructor from outside
    constructor(password: string, parts: UnitPart[], ident: UnitIdentifier = null) {
        if (password !== "uiaenrdt")
            throw new Error("Invalid password.");
        super(ident);
        this.parts = parts;
    }
    toString(): string {
		if (this.identifier !== null)
            return super.toString();
        const first = this.parts.filter(p => p.exponent > 0).map(p => p.toString()).join("*");
        const last = this.parts.filter(p => p.exponent < 0).map(p => p.toString(true)).join("*");
        if (last === "")
            return first;
        return first + "/" + last;
    }
    getHashCode(): string {
        if (this.identifier !== null)
            return super.getHashCode();
        const sortedParts = this.parts.map(p => `(${p.unit.getHashCode() }^${p.exponent})`)
            .sort((x, y) => ((x < y) ? -1 : ((x > y) ? 1 : 0)));
        return sortedParts.join(", ");
    }
    withIdentifier(identifier: UnitIdentifier): Unit {
        return new DerivedUnit("uiaenrdt", this.parts, identifier);
    }
    getConversionToCoherent(linearConversion?: boolean): Conversion {
        let factor = 1;
        let parts: UnitPart[] = [];
        this.parts.forEach(p => {
            var t = p.unit.getConversionToCoherent(true);
            factor *= Math.pow(t.factor, p.exponent);
            this.addPartToCollectionAndSimplify(parts, new UnitPart(t.targetUnit, p.exponent));
        });
        return new Conversion(this, DerivedUnit.create(parts), factor, 0);
    }
    private addPartToCollectionAndSimplify(collection: UnitPart[], part: UnitPart) {
        var unit = part.unit;
        if (unit instanceof DerivedUnit) {
            unit.parts.forEach(p => {
                this.addPartToCollectionAndSimplify(collection, new UnitPart(p.unit, p.exponent * part.exponent));
            });
        }
        else
            collection.push(part);
    }
}
export class UnitPart {
    public readonly exponent: number;
    public readonly unit: Unit;
    constructor(unit: Unit, exponent: number) {
        this.exponent = exponent;
        this.unit = unit;
    }
    toString(inDenominator: boolean = false): string {
        const exp = this.exponent * (inDenominator ? -1 : 1);
        if (exp === 1)
            return this.unit.toString();
        
        return this.unit.toString() + "^" + exp;
    }
}
window.onload = () => {
    var meter = new BaseUnit().withId("m", "Meter");
    var second = new BaseUnit().withId("s", "Second");
    var kilometer = meter.mul(1000).withId("km");
    var hour = second.mul(3600).withId("h", "Hour");
    var kmh = kilometer.div(hour).withId("kmh");
    var mps = meter.div(second);
    var megaparsec = meter.mul(3.08567758E22).withId("Megaparsec");
    var day = hour.mul(24).withId("day");
    var year = day.mul(365).withId("year");
    var nm = meter.div(1E9).withId("nm");
    var speed = kmh.mul(10);
    console.log(speed.toString()); // equals "10 kmh"
    var speedInMps = speed.convertTo(mps);
    console.log(speedInMps.toString()); // equals "2.77777777 m/s"
    var hubble = kilometer.div(second.mul(megaparsec)).mul(67.15);
    console.log(hubble.toString());
    var hubble2 = hubble.convertTo(nm.div(year.mul(kilometer)));
    console.log(hubble2.toString());
};