import * as load from "./load";
import scope from "./globalScope";
import gnuUnitsData from "../../data/gnu-units.json";
import customData from "../../data/custom_data.txt";
import { internalFunctions } from "./functions";

let inited = false;
export default function init() {
	if (inited) return;
	inited = true;

	scope.addFunctions(...internalFunctions);
	load.loadUnitsJson(scope, "units.json", gnuUnitsData);
	load.loadUnitsTxt(scope, "custom_data.txt", customData, true);
}
