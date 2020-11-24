import { UnitNumber } from ".";

export class TaggedString {
	vals: TaggedStringEle[];
	constructor(...vals: TaggedStringEle[]) {
		this.vals = vals;
	}
	append(t: TaggedStringEle) {
		if (t instanceof TaggedString) this.vals.push(...t.vals);
		else this.vals.push(t);
		return this;
	}
	toString() {
		return this.vals.join("");
	}
	flatten() {
		for (let i = 0; i < this.vals.length; i++) {
			const v = this.vals[i];
			if (v instanceof TaggedString) {
				v.flatten();
				this.vals.splice(i, 1, ...(this.vals[i] as TaggedString).vals);
			}
		}
	}
	// template function creating an array containing strings and UnitNumbers for linking to definitions in the gui
	static t(
		literals: TemplateStringsArray,
		...placeholders: TaggedStringEle[]
	): TaggedString {
		const result: TaggedStringEle[] = [];
		for (let i = 0; i < placeholders.length; i++) {
			if (literals[i].length > 0) result.push(literals[i]);
			result.push(placeholders[i]);
		}
		const last = literals[literals.length - 1];
		if (last.length > 0) result.push(last);
		return new TaggedString(...result);
	}
	static join(str: TaggedStringEle[], joinEle: TaggedStringEle) {
		if (str.length === 0) return new TaggedString();
		const out: TaggedStringEle[] = [str[0]];
		for (let i = 1; i < str.length; i++) {
			out.push(joinEle, str[i]);
		}
		return new TaggedString(...out);
	}
}

type TaggedStringEle = UnitNumber | string | TaggedString;
