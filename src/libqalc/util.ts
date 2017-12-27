// https://www.grammarly.com/blog/spelling-plurals-with-s-es/
const esSuffixes = ["s", "sh", "ch", "x", "z"];

/**
 * test -> null
 * inches -> inch
 * kilometers -> kilometer
 */
export function tryRemovePluralSuffix(x: string) {
	if (x.slice(-2) === "es") {
		const wop = x.slice(0, -2);
		for (const suff of esSuffixes) if (wop.endsWith(suff)) return wop;
	}
	if (x.slice(-1) === "s") {
		const wop = x.slice(0, -1);
		return wop;
	}
	return null;
}
