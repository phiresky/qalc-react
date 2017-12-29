import * as mobx from "mobx";

export enum Type {
	Deleted,
	Normal,
	Heading,
}
export interface Box {
	start: number;
	end: number;
	type: Type;
	headingLevel?: number;
}
export type CatChild =
	| { type: "category"; category: Category }
	| { type: "box"; box: Box };
export type Category = {
	name: string;
	path: number[];
	children: CatChild[];
	catChildren: Category[];
};

export default class CategorizeStore {
	@mobx.observable executed: any[][] = [];
	@mobx.observable boxes: Box[] = [];
	@mobx.observable selectionStart = -1;
	@mobx.observable selectionEnd = -1;
	readonly lines: string[];
	constructor(data: string, changes: any[][] = []) {
		this.lines = data.split("\n");
		this.lines.unshift(""); // pretend it's one indexed
		this.boxes = autoparseText(this.lines);
		this.executeAll(changes);
	}
	@mobx.action
	executeAll(changes: any[][]) {
		for (const change of changes) this.execute(change);
	}
	@mobx.action
	execute(cmd: any[]) {
		console.log("run: ", ...cmd);
		this.executed.push(cmd);
		const [command, ...args] = cmd;
		(this as any)[command](...args);
	}
	@mobx.action
	markSelection(a: number, b: number, type: Type) {
		const [startI, endI] = this.findBounds(this.boxes, a, b);
		for (let i = startI; i <= endI; i++) this.boxes[i].type = type;
	}
	@mobx.action
	unifySelection(a: number, b: number) {
		const [startI, endI] = this.findBounds(this.boxes, a, b);
		const type = this.boxes[startI].type;
		this.boxes.splice(startI, endI - startI + 1, {
			start: a,
			end: b,
			type,
		});
		this.selectionStart = -1;
		this.selectionEnd = -1;
	}
	@mobx.action
	splitSelection(a: number, b: number) {
		const [startI, endI] = this.findBounds(this.boxes, a, b);
		const newBs = [] as Box[];
		const type = this.boxes[startI].type;
		for (let i = a; i <= b; i++) {
			newBs.push({ start: i, end: i, type });
		}
		this.boxes.splice(startI, endI - startI + 1, ...newBs);
		this.selectionStart = -1;
		this.selectionEnd = -1;
	}
	@mobx.action
	setHeadingDepth(a: number, b: number, headingLevel: number) {
		const [startI, endI] = this.findBounds(this.boxes, a, b);
		for (let i = startI; i <= endI; i++)
			if (this.boxes[i].type === Type.Heading)
				this.boxes[i].headingLevel = headingLevel;
	}
	findBounds(boxes: Box[], l: number, r: number): [number, number] {
		return [
			binarySearchIndex(boxes, x => x.start, l),
			binarySearchIndex(boxes, x => x.end, r),
		];
	}
	getTableOfContents() {
		const root: Category = {
			name: "",
			path: [],
			children: [],
			catChildren: [],
		};
		const catTree = [{ str: "", num: 0 }] as { str: string; num: number }[];
		function addToRoot(
			[first, ...rest]: number[],
			child: CatChild,
			target: Category,
		) {
			if (typeof first !== "number") {
				target.children.push(child);
				return;
			}
			if (rest.length === 0) {
				if (child.type === "category") {
					if (target.catChildren[first]) {
						throw Error("already exists");
					}
					target.catChildren[first] = child.category;
					target.children.push(child);
				} else {
					if (!target.catChildren[first])
						console.log("no place", target, first);
					else target.catChildren[first].children.push(child);
				}
			} else {
				addToRoot(rest, child, target.catChildren[first]);
				return;
			}
		}
		for (let i = 0; i < this.boxes.length; i++) {
			const box = this.boxes[i];
			const level = box.headingLevel || catTree.length - 1;
			if (box.type === Type.Heading && level <= catTree.length) {
				const [old = { str: "", num: -1 }] = catTree.splice(level);
				const heading = this.getUncommentedText(box);
				catTree.push({
					num: old.num + 1,
					str: heading,
				});
				const path = catTree.map(x => x.num).slice(1);
				addToRoot(
					path,
					{
						type: "category",
						category: {
							name: heading,
							path: path,
							children: [],
							catChildren: [],
						},
					},
					root,
				);
			} else {
				const path = catTree.map(x => x.num).slice(1);
				addToRoot(path, { type: "box", box }, root);
			}
		}
		console.log(root);
		return root.children;
	}
	categoryTreeOf(line: number) {
		const boxI = Math.min(
			binarySearchIndex(this.boxes, x => x.start, line, false),
			binarySearchIndex(this.boxes, x => x.end, line, false),
		);
		const catTree = [{ str: "", num: 0 }] as { str: string; num: number }[];
		for (let i = 0; i <= boxI; i++) {
			const box = this.boxes[i];
			const level = box.headingLevel || catTree.length - 1;
			if (box.type === Type.Heading && level <= catTree.length) {
				const [old = { str: "", num: 0 }] = catTree.splice(level);
				catTree.push({
					num: old.num + 1,
					str: this.getUncommentedText(box),
				});
			}
		}
		catTree.shift();
		const box = this.boxes[boxI];
		const comment = this.getRawLines(box)
			.map(line => (line.split("#")[1] || "").trim())
			.join("\n")
			.trim();
		return {
			headingsIndex: catTree.map(x => x.num),
			headingLevel: catTree.length,
			headings: catTree.map(
				(x, i) =>
					catTree
						.slice(0, i + 1)
						.reduce((cum, n) => `${cum}${n.num}.`, "") +
					" " +
					x.str,
			),
			comment,
		};
	}
	getBoxContent(box: Box) {
		if (box.type === Type.Heading) throw Error("is heading");
		const split = this.getRawLines(box).map(line => {
			const [content, comment] = splitOnce(/#/, line, true);
			return {
				content,
				comment: comment.substring(1).trim(),
			};
		});
		const comment = split
			.map(({ comment }) => comment)
			.join("\n")
			.trim();
		const content = split
			.map(({ content }) => content)
			.join("\n")
			.trim();
		return { content, comment };
	}
	getRawLines(box: Box) {
		return this.lines.slice(box.start, box.end + 1);
	}
	getRawText(box: Box) {
		return this.getRawLines(box).join("\n");
	}
	getUncommentedText(box: Box) {
		return this.getRawLines(box)
			.map(line =>
				line
					.replace(/\s+/g, " ")
					.replace(/#/g, "")
					.trim(),
			)
			.join("\n")
			.trim();
	}
}

function autoparseText(lines: string[]) {
	const boxes: Box[] = [];
	let boxStart = 0;
	let currentAliases: string[] = [];
	let lastHadBackslash = false;
	for (let i = 0; i < lines.length; i++) {
		let [line, comment] = splitOnce(/#/, lines[i], true);
		let [variable, value] = splitOnce(/\s/, line, true);

		if (lastHadBackslash) {
			lastHadBackslash = line.endsWith("\\");
			continue;
		}
		lastHadBackslash = line.endsWith("\\");
		if (line.length > 0) {
			if (!line.startsWith("!")) {
				//console.log(currentAliases, value);
				if (currentAliases.indexOf(value) >= 0) {
					currentAliases.push(variable);
					continue;
				}
			}
		} else if (comment.length > 0) continue;
		// end box
		if (i > 0)
			boxes.push({
				start: boxStart,
				end: i - 1,
				type:
					currentAliases.length > 0
						? Type.Normal
						: i - 1 - boxStart == 0 ? Type.Deleted : Type.Heading,
			});
		boxStart = i;
		currentAliases = [variable, value].filter(x => x.length > 0);
	}
	if (boxStart < lines.length)
		boxes.push({
			start: boxStart,
			end: lines.length - 1,
			type: Type.Deleted,
		});
	return boxes;
}

function binarySearchIndex<T>(
	array: T[],
	accessor: (ele: T) => number,
	search: number,
	exact = true,
	min = 0,
	max = array.length - 1,
): number {
	if (min === max)
		if (exact && accessor(array[min]) !== search)
			throw Error("can't find element" + search);
		else return min;

	const mid = ((min + max) / 2) | 0;
	if (accessor(array[mid]) < search)
		return binarySearchIndex(array, accessor, search, exact, mid + 1, max);
	else return binarySearchIndex(array, accessor, search, exact, min, mid);
}

export function splitOnce(
	x: RegExp,
	str: string,
	trim = false,
): [string, string] {
	const i = str.search(x);
	if (i < 0) return [str, ""];
	const [a, b] = [str.substr(0, i), str.substr(i)];
	if (trim) return [a.trim(), b.trim()];
	else return [a, b];
}
