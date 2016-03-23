export class Conversion {
    private _sourceUnit: Unit;
    private _targetUnit: Unit;
    private _offset: number;
    private _factor: number;
    constructor(sourceUnit: Unit, targetUnit: Unit, factor: number, offset: number) {
        this._sourceUnit = sourceUnit;
        this._targetUnit = targetUnit;
        this._offset = offset;
        this._factor = factor;
    }
    get sourceUnit(): Unit { return this._sourceUnit; }
    get targetUnit(): Unit { return this._targetUnit; }
    get offset(): number { return this._offset; }
    get factor(): number { return this._factor; }
    inverse(): Conversion {
        // r = fx + o
        // r - o = fx => x = r/f - o/f
        return new Conversion(this._targetUnit, this._sourceUnit, 1 / this._factor, -this._offset / this._factor);
    }
    chain(conversion: Conversion) {
        
        // (this o conversion)(x) = this(conversion(x))
        // = this(c.f*x + c.o) = t.f * c.f * x + t.f * c.o + t.o
        if (!conversion._targetUnit.equals(this._sourceUnit))
            throw new Error("Invalid conversion!");
        return new Conversion(conversion._sourceUnit, this._targetUnit,
            this._factor * conversion._factor,
            this._factor * conversion.offset + this._offset);
    }
    convert(value: number): number {
        return value * this._factor + this._offset;
    }
}
export class UnitIdentifier {
    private _id: string;
    private _name: string;
    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }
    get id(): string { return this._id; }
    get name(): string { return this._name; }
    toString(): string { return this.id; }
}
export abstract class Unit {
    static getDimensionless(): Unit { return DerivedUnit.create([]); }
    private _identifier: UnitIdentifier;
    constructor(identifier: UnitIdentifier = null) {
        this._identifier = identifier;
    }
    withId(id: string, name: string = null): Unit {
        return this.withIdentifier(new UnitIdentifier(id, name));
    }
    abstract withIdentifier(identifier: UnitIdentifier): Unit;
    get identifier(): UnitIdentifier { return this._identifier; }
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
		/*const q = new Quantity(1, this).convertTo(Unit.getDimensionless());
		if(q !== null) {
			const b = new Quantity(1, factor).convertTo(Unit.getDimensionless()).getValue();
			return Unit.getDimensionless().mul(Math.pow(q.getValue(),b));
		} else {
			return DerivedUnit.create(new UnitPart(this, b));
		}*/

		const b = typeof factor === "number" ? factor : new Quantity(1, factor).convertTo(Unit.getDimensionless()).getValue();
		return DerivedUnit.create([new UnitPart(this, b)]);
	}
	minus(minand: Unit): Unit {
		const minandAsThis = new Quantity(1, minand).convertTo(this);
		return this.mul(1 - minandAsThis.getValue());
	}
	plus(plusand: Unit): Unit {
		return this.mul(1 + new Quantity(1, plusand).convertTo(this).getValue());
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
    private _offset: number;
    private _factor: number;
    private _underlayingUnit: Unit;
    constructor(underlayingUnit: Unit, factor: number, offset: number, ident: UnitIdentifier = null) {
        super(ident);
        this._underlayingUnit = underlayingUnit;
        this._offset = offset;
        this._factor = factor;
    }
    get underlayingUnit(): Unit { return this._underlayingUnit; }
    get offset(): number { return this._offset; }
    get factor(): number { return this._factor; }
    toString(): string {
        if (this.identifier !== null)
            return super.toString();
        if (this._offset === 0)
            return "" + this._factor + this._underlayingUnit.toString();
        else
            return "" + this._factor + this._underlayingUnit.toString() + "+" + this._offset + this._underlayingUnit.toString();
    }
    withIdentifier(identifier: UnitIdentifier): Unit {
        return new ScaledShiftedUnit(this._underlayingUnit, this._factor, this._offset, identifier);
    }
    getConversionToCoherent(linearConversion?: boolean): Conversion {
        if (linearConversion && this._offset !== 0)
            return new Conversion(this, this, 1, 0);
        return this._underlayingUnit.getConversionToCoherent().chain(
            new Conversion(this, this._underlayingUnit, this._factor, this._offset));
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
    private _parts: UnitPart[];
	get parts() { return this._parts; }
    // don't call the constructor from outside
    constructor(password: string, parts: UnitPart[], ident: UnitIdentifier = null) {
        if (password !== "uiaenrdt")
            throw new Error("Invalid password.");
        super(ident);
        this._parts = parts;
    }
    toString(): string {
        const first = this._parts.filter(p => p.exponent > 0).map(p => p.toString()).join("*");
        const last = this._parts.filter(p => p.exponent < 0).map(p => p.toString(true)).join("*");
        if (last === "")
            return first;
        return first + "/" + last;
    }
    getHashCode(): string {
        if (this.identifier !== null)
            return super.getHashCode();
        const sortedParts = this._parts.map(p => `(${p.unit.getHashCode() }^${p.exponent})`)
            .sort((x, y) => ((x < y) ? -1 : ((x > y) ? 1 : 0)));
        return sortedParts.join(", ");
    }
    withIdentifier(identifier: UnitIdentifier): Unit {
        return new DerivedUnit("uiaenrdt", this._parts, identifier);
    }
    getConversionToCoherent(linearConversion?: boolean): Conversion {
        let factor = 1;
        let parts: UnitPart[] = [];
        this._parts.forEach(p => {
            var t = p.unit.getConversionToCoherent(true);
            factor *= Math.pow(t.factor, p.exponent);
            this.addPartToCollectionAndSimplify(parts, new UnitPart(t.targetUnit, p.exponent));
        });
        return new Conversion(this, DerivedUnit.create(parts), factor, 0);
    }
    private addPartToCollectionAndSimplify(collection: UnitPart[], part: UnitPart) {
        var unit = part.unit;
        if (unit instanceof DerivedUnit) {
            unit._parts.forEach(p => {
                this.addPartToCollectionAndSimplify(collection, new UnitPart(p.unit, p.exponent * part.exponent));
            });
        }
        else
            collection.push(part);
    }
}
export class UnitPart {
    private _exponent: number;
    private _unit: Unit;
    constructor(unit: Unit, exponent: number) {
        this._exponent = exponent;
        this._unit = unit;
    }
    get exponent(): number { return this._exponent; }
    get unit(): Unit { return this._unit; }
    toString(inDenominator: boolean = false): string {
        const exp = this._exponent * (inDenominator ? -1 : 1);
        if (exp === 1)
            return this._unit.toString();
        
        return this._unit.toString() + "^" + exp;
    }
}
export class Quantity {
    private _unit: Unit;
    private _value: number;
    constructor(value: number, unit: Unit) {
        this._unit = unit;
        this._value = value;
    }
    get unit(): Unit { return this._unit; }
    getValue(): number {
        return this._value;
    }
    convertTo(targetUnit: Unit): Quantity {
        const t1 = this._unit.getConversionToCoherent();
        const t2 = targetUnit.getConversionToCoherent();
        if (!t1.targetUnit.equals(t2.targetUnit))
            throw Error(t1.targetUnit +" != "+t2.targetUnit);
        const t3 = t2.inverse().chain(t1);
        return new Quantity(t3.convert(this._value), t3.targetUnit);
    }
    toString(): string {
        return this._value + " " + this._unit.toString();
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
    var speed = new Quantity(10, kmh);
    console.log(speed.toString()); // equals "10 kmh"
    var speedInMps = speed.convertTo(mps);
    console.log(speedInMps.toString()); // equals "2.77777777 m/s"
    var hubble = new Quantity(67.15, kilometer.div(second.mul(megaparsec)));
    console.log(hubble.toString());
    var hubble2 = hubble.convertTo(nm.div(year.mul(kilometer)));
    console.log(hubble2.toString());
};