import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'whatwg-fetch';
import * as mobx from 'mobx';
import * as mobxReact from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import * as gnuDefs from 'raw-loader!../gnu-units-2.12/definitions.units';

const dir = "./gnu-units-2.12/";
enum Type {
	Deleted, Normal, Heading
}
interface Box {
	start: number; end: number; type: Type; headingLevel?: number;
}

function binarySearchIndex<T>(array: T[], accessor: (ele:T) => number, search: number, exact = true, min = 0, max = array.length - 1): number {
	if(min === max)
		if(exact && accessor(array[min]) !== search) throw Error("can't find element" + search);
		else return min;
	const mid = ((min + max) / 2) |0;
	if(accessor(array[mid]) < search)
		return binarySearchIndex(array, accessor, search, exact, mid + 1, max);
	else
		return binarySearchIndex(array, accessor, search, exact, min, mid);
}
export class CategorizeStore {
	@mobx.observable
	executed: any[][] = [];
	@mobx.observable
	boxes: Box[] = [];
	@mobx.observable
	selectionStart = -1;
	@mobx.observable
	selectionEnd = -1;
	readonly lines: string[];
	constructor(data: string, changes: any[][] = []) {
		this.lines = data.split("\n");
		this.lines.unshift(""); // pretend it's one indexed
		this.boxes = autoparseText(this.lines);
		this.executeAll(changes);
	}
	@mobx.action
	executeAll(changes: any[][]) {
		for(const change of changes) this.execute(change);
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
		for(let i = startI; i <= endI; i++) this.boxes[i].type = type;
	}
	@mobx.action
	unifySelection(a: number, b: number) {
		const [startI, endI] = this.findBounds(this.boxes, a, b);
		const type = this.boxes[startI].type;
		this.boxes.splice(startI, endI - startI + 1, {start: a, end: b, type});
		this.selectionStart = -1;
		this.selectionEnd = -1;	
	}
	@mobx.action
	splitSelection(a: number, b: number) {
		const [startI, endI] = this.findBounds(this.boxes, a,b);
		const newBs = [] as Box[];
		const type = this.boxes[startI].type;
		for(let i = a; i <= b; i++) {
			newBs.push({start:i, end: i, type});
		}
		this.boxes.splice(startI, endI - startI + 1, ...newBs);
		this.selectionStart = -1;
		this.selectionEnd = -1;
	}
	@mobx.action
	setHeadingDepth(a: number, b: number, headingLevel: number) {
		const [startI, endI] = this.findBounds(this.boxes, a, b);
		for(let i = startI; i <= endI; i++)
			if(this.boxes[i].type === Type.Heading)
			this.boxes[i].headingLevel = headingLevel;
	}
	findBounds(boxes: Box[], l: number, r: number): [number, number] {
		return [binarySearchIndex(boxes, x => x.start, l), binarySearchIndex(boxes, x => x.end, r)];
	}
	categoryTreeOf(line: number) {
		const boxI = Math.min(binarySearchIndex(this.boxes, x => x.start, line, false),
			binarySearchIndex(this.boxes, x => x.end, line, false));
		const catTree = [''] as string[];
		for(let i = 0; i <= boxI; i++) {
			const box = this.boxes[i];
			const level = box.headingLevel || catTree.length - 1;
			if(box.type == Type.Heading && level <= catTree.length) {
				catTree.splice(level);
				catTree.push(this.lines.slice(box.start, box.end + 1)
						.map(line => line.replace(/\s+/g, " ").replace(/#/g, "").trim())
					.join("\n").trim());
			}
		}
		catTree.shift();
		const box = this.boxes[boxI];
		const comment = this.lines.slice(box.start, box.end + 1).map(line => (line.split("#")[1] || "").trim()).join("\n").trim();
		return {headings: catTree, comment};
	}
}
@mobxReact.observer
class HelperGui extends React.Component<{store: CategorizeStore}, {}> {
	pres: Map<Node, number> = new Map();
	store: CategorizeStore;
	constructor(props: {store: CategorizeStore}) {
		super(props);
		this.store = this.props.store;
		document.addEventListener("selectionchange", e => this.getSelection(document.getSelection()), false);
		document.addEventListener("keyup", e => this.commandKey(e, String.fromCharCode(e.keyCode)));
		mobx.autorun("consistency check", () => this.checkConsistency());
		mobx.reaction("save to localStorage", () => JSON.stringify(this.store.executed), (data) => {
			console.log("set localStorage");
			localStorage.setItem("executed", data);
		}, false, 500);
	}
	commandKey(e: KeyboardEvent, key: string) {
		if(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) return;
		const sel = [this.store.selectionStart, this.store.selectionEnd];
		if(sel[0] == -1 || sel[1] == -1) {
			console.log("no selection");
			return;
		}
		if(key == 'T') {
			console.log(this.store.categoryTreeOf(sel[0]));
			return;
		} else if(key =='C') {
			console.log(this.store.lines.slice(sel[0], sel[1] + 1)
				.map(x => x.replace(/^\s*#/g, ""))
				.join("\n"));
		}
		const cmds:{[name:string]: any[]} = {
			'J':["unifySelection", ...sel], 
			'S':["splitSelection", ...sel],
			'D':["markSelection", ...sel, Type.Deleted],
			'H':["markSelection", ...sel, Type.Heading],
			'N':["markSelection", ...sel, Type.Normal],
		};
		let cmd = cmds[key];
		if(/[0-9]/.test(key)) cmd = ["setHeadingDepth", ...sel, +key]; 
		else if(!cmds[key]) {
			console.log("unknown command: "+key);
			return;
		}
		this.store.execute(cmd);
	}

	@mobx.action
	getSelection(s: Selection) {
		const [boxes, lines] = [this.store.boxes, this.store.lines];
		let boxStartI = this.pres.get(s.anchorNode) || this.pres.get(s.anchorNode.parentElement!);
		let boxEndI = this.pres.get(s.focusNode) || this.pres.get(s.focusNode.parentNode!);
		if(boxStartI === undefined || boxEndI === undefined) {
			boxStartI = -1;
			boxEndI = -1;
		}
		if(boxEndI < boxStartI) [boxStartI, boxEndI] = [boxEndI, boxStartI];
		const [a, b] = [this.store.boxes[boxStartI].start, this.store.boxes[boxEndI].end];
		this.store.selectionStart = a;
		this.store.selectionEnd = b;
	}
	render() {
		const {boxes, lines} = this.store;
		let currentIndent = 0;
		return (
			<div className="container">
				<div className="page-header">
					<p>Select boxes with the mouse. <br />
					Then press J to join boxes, S to split them, <br />
					H to mark them as a heading <br/>
					N to mark them as normal <br/>
					D to mark them as deleted <br/>
					T to print the category tree of the first box to the console. <br/>
					Use 1-9 to set the level of the heading, 0 to set it to the level of the previous heading <br/>
					</p>
					<p>The data is saved to localStorage.executed as a list of the executed commands</p>
				</div>
				{boxes.map((box,i) => {
					if(box.headingLevel) currentIndent = box.headingLevel;
					const thisIndent = currentIndent + (box.type == Type.Heading ? 0 : 1);
					return <pre style={Object.assign({}, typeStyles[box.type], {marginLeft:((thisIndent-1)*70)+"px"})} className={box.start >= this.store.selectionStart && box.end <= this.store.selectionEnd ? "alert alert-info": ""}
							key={box.start+","+box.end} ref={e => this.pres.set(e, i)}>
						{lines.slice(box.start, box.end + 1).join("\n")}
					</pre>
				}
				)}
			</div>
		)
	}

	checkConsistency() {
		let i = 0;
		for(const box of this.store.boxes) {
			if(box.start !== i) console.error("inconsistency: end=", i, "!=", box.start,"=start");
			if(box.end < box.start) console.error("inconsistency box < 0", box);
			i = box.end + 1;
		}
	}
}

const styles = {
	box: {
		borderBottom:"1px solid black",
		borderRadius:"0px",
		padding:"2px",
		margin:0,
		maxHeight: "300px"
	},
};
const typeStyles = {
	[Type.Deleted]: Object.assign({}, styles.box, {
		color: "lightgray"
	}),
	[Type.Normal]: Object.assign({}, styles.box, {
		
	}),
	[Type.Heading]: Object.assign({}, styles.box, {
		fontWeight: "bold",
		fontSize: "120%"
	})
};
function splitOnce(x: RegExp, str: string, trim = false): [string, string] {
	const i = str.search(x);
	if(i < 0) return [str, ""];
	const [a,b] = [str.substr(0, i), str.substr(i)];
	if(trim) return [a.trim(), b.trim()];
	else return [a, b];
}
function autoparseText(lines: string[]) {
	const boxes: Box[] = [];
	let boxStart = 0;
	let currentAliases: string[] = [];
	let lastHadBackslash = false;
	for (let i = 0; i < lines.length; i++) {
		let [line, comment] = splitOnce(/#/, lines[i], true);
		let [variable, value] = splitOnce(/\s/, line, true);
		
		if(lastHadBackslash) {
			lastHadBackslash = line.endsWith("\\");
			continue;
		}
		lastHadBackslash = line.endsWith("\\");
		if (line.length > 0) {
			if(!line.startsWith("!")) {
				//console.log(currentAliases, value);
				if(currentAliases.indexOf(value) >= 0) {
					currentAliases.push(variable);
					continue;
				}
			}
			
		} else if(comment.length > 0) continue;
		// end box
		if(i > 0) boxes.push({start: boxStart, end: i - 1, type: currentAliases.length > 0 ? Type.Normal : i - 1 - boxStart == 0 ? Type.Deleted : Type.Heading });
		boxStart = i;
		currentAliases = [variable, value].filter(x => x.length > 0);
	}
	if(boxStart < lines.length) boxes.push({start: boxStart, end: lines.length - 1, type: Type.Deleted});
	return boxes;
}
function init(str: string) {
	const actions = JSON.parse(localStorage.getItem("executed") || "[]");
	ReactDOM.render(
		<div>
			<HelperGui store={new CategorizeStore(str, actions)} ref={guiInst => Object.assign(window, {guiInst})} />
			<DevTools />
		</div>, document.getElementById("root"));
}
if(typeof window !== "undefined")
	init(gnuDefs);
