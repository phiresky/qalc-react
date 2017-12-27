import UnitNumber from "./UnitNumber";
import DimensionMap from "./DimensionMap";

export default class Dimension {
	private static dimensions = new Map<DimensionId, Dimension>();
	static get(id: DimensionId) {
		return Dimension.dimensions.get(id);
	}
	readonly id: DimensionId;
	readonly name: string;
	readonly baseUnit: UnitNumber;
	constructor(name: string) {
		this.id = Dimension.dimensions.size as DimensionId;
		this.name = name;
		Dimension.dimensions.set(this.id, this);
		this.baseUnit = new UnitNumber(
			1,
			new DimensionMap([[this.id, 1]]),
			this.name,
		);
	}
}

// <hack href="https://github.com/Microsoft/TypeScript/issues/202">
namespace AsDimensionId {
	export const enum Brand {}
}
interface AsDimensionId {
	"": AsDimensionId.Brand;
}
export type DimensionId = number & AsDimensionId;
// </hack>
