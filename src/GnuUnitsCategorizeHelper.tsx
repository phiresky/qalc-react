import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

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
class HelperGui extends React.Component<{ lines: string[] }, { boxes: Box[], selectionStart: number, selectionEnd: number }> {
	pres: Map<Node, number> = new Map();
	executed: any[][] = [
	];
	constructor(props: { lines: string[] }) {
		super(props);
		this.state = { boxes: autoparseText(props.lines), selectionStart: -1, selectionEnd: -1 };
		document.addEventListener("selectionchange", e => this.getSelection(document.getSelection()), false);
		document.addEventListener("keyup", e => this.commandKey(e, String.fromCharCode(e.keyCode)));
	}
	categoryTreeOf(line: number) {
		const boxI = binarySearchIndex(this.state.boxes, x => x.start, line, false);
		const catTree = [''] as string[];
		for(let i = 0; i <= boxI; i++) {
			const box = this.state.boxes[i];
			const level = box.headingLevel || catTree.length - 1;
			if(box.type == Type.Heading && level <= catTree.length) {
				catTree.splice(level);
				catTree.push(this.props.lines.slice(box.start, box.end + 1).join("\n"));
			}
		}
		catTree.shift();
		return catTree;
	}
	commandKey(e: KeyboardEvent, key: string) {
		if(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) return;
		const sel = [this.state.selectionStart, this.state.selectionEnd];
		if(sel[0] == -1 || sel[1] == -1) {
			console.log("no selection");
			return;
		}
		if(key == 'T') {
			console.log(this.categoryTreeOf(sel[0]).map(x => x.replace(/#/g, "").replace(/\s+/g, " ")));
			return;
		} else if(key =='C') {
			console.log(this.props.lines.slice(sel[0], sel[1] + 1)
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
		this.execute(cmd);
	}
	setHeadingDepth(a: number, b: number, headingLevel: number) {
		this.setState(s => {
			const boxes = s.boxes.slice();
			const [startI, endI] = this.findBounds(boxes, a, b);
			for(let i = startI; i <= endI; i++) boxes[i] = boxes[i].type === Type.Heading ? Object.assign({}, boxes[i], {headingLevel}): boxes[i];
			return {boxes}; 
		});
	}
	execute(cmd: any[]) {
		console.log("run: ", ...cmd);
		this.executed.push(cmd);
		(this as any)[cmd[0]].apply(this, cmd.slice(1));
		localStorage.setItem("executed", JSON.stringify(this.executed));
	}
	findBounds(boxes: Box[], l: number, r: number): [number, number] {
		return [binarySearchIndex(boxes, x => x.start, l), binarySearchIndex(boxes, x => x.end, r)];
	}
	markSelection(a: number, b: number, type: Type) {
		this.setState(s => {
			const boxes = s.boxes.slice();
			const [startI, endI] = this.findBounds(boxes, a, b);
			for(let i = startI; i <= endI; i++) boxes[i] = Object.assign({}, boxes[i], {type});
			return {boxes}; 
		});
	}
	unifySelection(a: number, b: number) {
		this.setState(s => {
			const boxes = s.boxes.slice();
			const [startI, endI] = this.findBounds(boxes, a,b);
			const type = boxes[startI].type;
			boxes.splice(startI, endI - startI + 1, {start: a, end: b, type});
			return {boxes, selectionStart: -1, selectionEnd: -1};
		})
		
	}
	splitSelection(a: number, b: number) {
		this.setState(s => {
			const boxes = s.boxes.slice();
			const [startI, endI] = this.findBounds(boxes, a,b);
			const newBs = [] as Box[];
			const type = boxes[startI].type;
			for(let i = a; i <= b; i++) {
				newBs.push({start:i, end: i, type});
			}
			boxes.splice(startI, endI - startI + 1, ...newBs);
			return {boxes, selectionStart: -1, selectionEnd: -1};
		});
	}
	getSelection(s: Selection) {
		const [boxes, lines] = [this.state.boxes, this.props.lines];
		let boxStartI = this.pres.get(s.anchorNode) || this.pres.get(s.anchorNode.parentElement!);
		let boxEndI = this.pres.get(s.focusNode) || this.pres.get(s.focusNode.parentNode!);
		if(boxStartI === undefined || boxEndI === undefined) {
			boxStartI = -1;
			boxEndI = -1;
		}
		if(boxEndI < boxStartI) [boxStartI, boxEndI] = [boxEndI, boxStartI];
		const [a, b] = [this.state.boxes[boxStartI].start, this.state.boxes[boxEndI].end];
		if(a == this.state.selectionStart && b == this.state.selectionEnd) {
			return;
		}
		else this.setState({selectionStart: a, selectionEnd: b} as any);
	}
	render() {
		const [boxes, lines] = [this.state.boxes, this.props.lines];
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
					return <pre style={Object.assign({}, typeStyles[box.type], {marginLeft:((thisIndent-1)*70)+"px"})} className={box.start >= this.state.selectionStart && box.end <= this.state.selectionEnd ? "alert alert-info": ""}
							key={box.start+","+box.end} ref={e => this.pres.set(e, i)}>
						{lines.slice(box.start, box.end + 1).join("\n")}
					</pre>
				}
				)}
			</div>
		)
	}
	componentDidMount() {
		JSON.parse(localStorage.getItem("executed") || "[]").forEach((cmd:any[]) => this.execute(cmd));
		this.componentDidUpdate();
	}
	componentDidUpdate() {
		let i = 0;
		for(const box of this.state.boxes) {
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
fetch(dir + "/definitions.units").then(x => x.text()).then(str => {
	const lines = str.split("\n");
	lines.unshift(""); // pretend it's one indexed
	(window as any).guiInst = ReactDOM.render(<HelperGui lines={lines} />, document.getElementById("root")) as any;
})
