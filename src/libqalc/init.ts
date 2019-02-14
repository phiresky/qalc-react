import * as load from "./load";
import scope from "./globalScope";

import { internalFunctions } from "./functions";

let inited = false;
export default function init() {
	if (inited) return;
	inited = true;
	console.log("TOF", typeof navigator);
	if (
		typeof navigator !== "undefined" &&
		navigator.product === "ReactNative"
	) {
		var gnuUnitsData = require("../../data/gnu-units.json");
		var customData = require("../../data/custom_data.txt.json").text; // todo
	} /*else if (typeof window === "undefined") {
		// running in node
		
		const fs = require("fs");
		var gnuUnitsData = JSON.parse(
			fs.readFileSync(__dirname + "/../../data/gnu-units.json", "utf8"),
		);
		var customData = fs.readFileSync(
			__dirname + "/../../data/custom_data.txt",
			"utf8",
		) as string;
	} else {
		// running in webpack
		var gnuUnitsData = require("../../data/gnu-units.json");
		var customData = require("../../data/custom_data.txt") as string;
	}*/

	scope.addFunctions(...internalFunctions);
	load.loadUnitsJson(scope, "units.json", gnuUnitsData);
	load.loadUnitsTxt(scope, "custom_data.txt", customData, true);
}
