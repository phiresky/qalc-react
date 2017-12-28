import gnuDefs from "../../units-2.12/definitions.units";
import { init } from "./GnuUnitsCategorizeHelper";
import steps from "../../data/gnu-units-categorize-steps.json";

if (typeof window !== "undefined") init(gnuDefs, steps);
