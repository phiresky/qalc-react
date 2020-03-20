import * as load from "./load";
import scope from "./globalScope";

import { internalFunctions } from "./functions";

let inited = false;
export default function init() {
	if (inited) return;
	inited = true;
	console.log("TOF", typeof navigator);
	let customData;
	let gnuUnitsData;
	if (
		typeof navigator !== "undefined" &&
		navigator.product === "ReactNative"
	) {
		console.log("react native");
		gnuUnitsData = require("../../data/gnu-units.json");
		customData = require("../../data/custom_data.txt.json").text; // todo
	} else if (typeof window === "undefined") {
		// running in node
		console.log("node");
		const fs = require("fs");
		gnuUnitsData = JSON.parse(
			fs.readFileSync(__dirname + "/../../data/gnu-units.json", "utf8"),
		);
		customData = fs.readFileSync(
			__dirname + "/../../data/custom_data.txt",
			"utf8",
		) as string;
	} else {
		console.log("webpack");
		// running in webpack
		gnuUnitsData = require("../../data/gnu-units.json");
		customData = require("../../data/custom_data.txt").default as string;
	}

	console.log(customData);
	scope.addFunctions(...internalFunctions);
	load.loadUnitsJson(scope, "units.json", gnuUnitsData);
	load.loadUnitsTxt(scope, "custom_data.txt", customData, true);
}
