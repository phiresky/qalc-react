import * as mobx from "mobx";
import * as mobxReact from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "whatwg-fetch";
import { addBootstrapCss, getAppDiv } from "../ui/util";
import CategorizeStore, { Type } from "./CategorizeStore";

function download(content: string, filename: string) {
	const a = window.document.createElement("a");
	a.href = window.URL.createObjectURL(
		new Blob([content], { type: "text/plain" }),
	);
	a.download = filename;

	// Append anchor to body.
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}
@mobxReact.observer
class HelperGui extends React.Component<{ store: CategorizeStore }> {
	pres: Map<Node, number> = new Map();
	store: CategorizeStore;
	constructor(props: { store: CategorizeStore }) {
		super(props);
		this.store = this.props.store;
		document.addEventListener(
			"selectionchange",
			(_) => this.getSelection(document.getSelection()!),
			false,
		);
		document.addEventListener("keyup", (e) =>
			this.commandKey(e, String.fromCharCode(e.keyCode)),
		);
		mobx.autorun(() => this.checkConsistency(), {
			name: "consistency check",
		});
		mobx.reaction(
			() => JSON.stringify(this.store.executed),
			(data) => {
				console.log("set localStorage");
				localStorage.setItem("executed", data);
			},
			{
				name: "save to localStorage",
				fireImmediately: false,
				delay: 500,
			},
		);
	}
	commandKey(e: KeyboardEvent, key: string) {
		if (e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) return;
		const sel = [this.store.selectionStart, this.store.selectionEnd];
		if (sel[0] == -1 || sel[1] == -1) {
			console.log("no selection");
			return;
		}
		if (key == "T") {
			console.log(this.store.categoryTreeOf(sel[0]));
			return;
		} else if (key == "C") {
			console.log(
				this.store.lines
					.slice(sel[0], sel[1] + 1)
					.map((x) => x.replace(/^\s*#/g, ""))
					.join("\n"),
			);
		}
		const cmds: { [name: string]: any[] } = {
			J: ["unifySelection", ...sel],
			S: ["splitSelection", ...sel],
			D: ["markSelection", ...sel, Type.Deleted],
			H: ["markSelection", ...sel, Type.Heading],
			N: ["markSelection", ...sel, Type.Normal],
		};
		let cmd = cmds[key];
		if (/[0-9]/.test(key)) cmd = ["setHeadingDepth", ...sel, +key];
		else if (!cmds[key]) {
			console.log("unknown command: " + key);
			return;
		}
		this.store.execute(cmd);
	}

	@mobx.action
	getSelection(s: Selection) {
		// const [boxes, lines] = [this.store.boxes, this.store.lines];
		let boxStartI = s.anchorNode
			? this.pres.get(s.anchorNode) ||
			  this.pres.get(s.anchorNode.parentElement!)
			: undefined;
		let boxEndI = s.focusNode
			? this.pres.get(s.focusNode) ||
			  this.pres.get(s.focusNode.parentNode!)
			: undefined;
		if (boxStartI === undefined || boxEndI === undefined) {
			boxStartI = -1;
			boxEndI = -1;
		}
		if (boxEndI < boxStartI) [boxStartI, boxEndI] = [boxEndI, boxStartI];
		const [a, b] = [
			this.store.boxes[boxStartI].start,
			this.store.boxes[boxEndI].end,
		];
		this.store.selectionStart = a;
		this.store.selectionEnd = b;
	}
	render() {
		const { boxes } = this.store;
		let currentIndent = 0;
		return (
			<div className="container gnu-units-categorize">
				<div className="page-header">
					<p>
						Select boxes with the mouse. <br />
						Then press J to join boxes, S to split them, <br />
						H to mark them as a heading <br />
						N to mark them as normal <br />
						D to mark them as deleted <br />
						T to print the category tree of the first box to the
						console. <br />
						Use 1-9 to set the level of the heading, 0 to set it to
						the level of the previous heading <br />
					</p>
					<p>
						The data is saved to localStorage.executed as a list of
						the executed commands.{" "}
						<button
							onClick={() => {
								localStorage.clear();
								location.reload();
							}}
						>
							Clear
						</button>
						<button
							onClick={() =>
								download(
									JSON.stringify(
										this.store.executed,
										null,
										"\t",
									),
									"executed.json",
								)
							}
						>
							Download
						</button>
					</p>
				</div>
				{boxes.map((box, i) => {
					if (box.headingLevel) currentIndent = box.headingLevel;
					const thisIndent =
						currentIndent + (box.type == Type.Heading ? 0 : 1);
					return (
						<pre
							style={Object.assign({}, typeStyles[box.type], {
								marginLeft: (thisIndent - 1) * 70 + "px",
							})}
							className={
								box.start >= this.store.selectionStart &&
								box.end <= this.store.selectionEnd
									? "alert alert-info"
									: ""
							}
							key={box.start + "," + box.end}
							ref={(e) => this.pres.set(e!, i)}
						>
							{this.store.getRawText(box)}
						</pre>
					);
				})}
			</div>
		);
	}

	checkConsistency() {
		let i = 0;
		for (const box of this.store.boxes) {
			if (box.start !== i)
				console.error(
					"inconsistency: end=",
					i,
					"!=",
					box.start,
					"=start",
				);
			if (box.end < box.start)
				console.error("inconsistency box < 0", box);
			i = box.end + 1;
		}
	}
}

const styles = {
	box: {
		borderBottom: "1px solid black",
		borderRadius: "0px",
		padding: "2px",
		margin: 0,
		maxHeight: "300px",
	},
};
const typeStyles: { [t in Type]: React.CSSProperties } = {
	[Type.Deleted]: Object.assign({}, styles.box, {
		color: "lightgray",
	}),
	[Type.Normal]: Object.assign({}, styles.box, {}),
	[Type.Heading]: Object.assign({}, styles.box, {
		fontWeight: "bold",
		fontSize: "120%",
	} as React.CSSProperties),
};

export function init(str: string, preloadSteps: any[]) {
	addBootstrapCss();
	const actions =
		JSON.parse(localStorage.getItem("executed") || "null") || preloadSteps;
	ReactDOM.render(
		<div>
			<HelperGui
				store={new CategorizeStore(str, actions)}
				ref={(guiInst) => Object.assign(window, { guiInst })}
			/>
		</div>,
		getAppDiv(),
	);
}
