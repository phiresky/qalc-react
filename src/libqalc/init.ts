import { internalFunctions } from "./functions";
import scope from "./globalScope";
import * as load from "./load";

let inited = false;
export default async function init(): Promise<void> {
	if (inited) return;
	inited = true;
	console.log("TOF", typeof navigator);
	let customData;
	let gnuUnitsData;
	if (typeof window === "undefined") {
		throw Error("currently not supported");
		/*// running in node
		console.log("node");
		const fs = require("fs");
		gnuUnitsData = JSON.parse(
			fs.readFileSync(__dirname + "/../../data/gnu-units.json", "utf8"),
		);
		customData = fs.readFileSync(
			__dirname + "/../../data/custom_data.txt",
			"utf8",
		) as string;*/
	} else {
		console.log("webpack");
		// running in webpack
		gnuUnitsData = await import("../../data/gnu-units.json");
		customData = (await import("../../data/custom_data.txt"))
			.default as string;
	}
	scope.addFunctions(...internalFunctions);
	load.loadUnitsJson(scope, "units.json", gnuUnitsData);
	load.loadUnitsTxt(scope, "custom_data.txt", customData, true);
}
