import * as React from "react";
import lzString from "lz-string";
import {
	qalculate,
	qalculationHasSideeffect,
	parseEvaluate,
	QalculationResult,
} from "./libqalc";
import { UnitNumber } from "./unitNumber";
import { TaggedString } from "./output";
import * as queryString from "query-string";
import scope from "./libqalc/globalScope";
import { render } from "react-dom";
import Tooltip from "rc-tooltip";
import { observable } from "mobx";
import "../style.scss";
import "rc-tooltip/assets/bootstrap_white.css";
import { observer } from "mobx-react";
import { tokenize, TokenType } from "./libqalc/parser";

@observer
class DefinitionOvelay extends React.Component<{
	unit: UnitNumber;
	onClickUnit: (u: UnitNumber) => void;
}> {
	@observable definition: TaggedString | null = null;
	constructor(p: any) {
		super(p);
		this.load();
	}
	async load() {
		try {
			this.definition = (await qalculate(this.props.unit.id!)).output;
		} catch (e) {
			this.definition = new TaggedString(e.message);
		}
	}
	render() {
		if (this.definition)
			return (
				<TaggedStringDisplay
					text={this.definition}
					ignore={[this.props.unit]}
					onClickUnit={this.props.onClickUnit}
				/>
			);
		return <div>Loading</div>;
	}
}
class TaggedStringDisplay extends React.Component<{
	className?: string;
	text: TaggedString;
	ignore?: UnitNumber[];
	onClickUnit: (u: UnitNumber) => void;
}> {
	constructor(props: any) {
		super(props);
	}
	taggedStringToHtml(str: TaggedString): any[] {
		return str.vals.map((x, i) => {
			if (typeof x === "string") return <span key={i}>{x}</span>;
			else if (x instanceof UnitNumber) {
				if (
					this.props.ignore &&
					this.props.ignore.some(i => i.id === x.id)
				)
					return <span key={i}>{x.toString()}</span>;
				return (
					<Tooltip
						key={i}
						placement="bottom"
						overlay={() => (
							<DefinitionOvelay
								unit={x}
								onClickUnit={this.props.onClickUnit}
							/>
						)}
					>
						<a
							href="#"
							className="unit-href"
							onClick={e => {
								this.props.onClickUnit(x);
								e.preventDefault();
							}}
						>
							{x.toString()}
						</a>
					</Tooltip>
				);
			} else if (x instanceof TaggedString)
				return this.taggedStringToHtml(x);
			else throw Error("unknown value");
		});
	}
	render() {
		return (
			<div
				className={`tagged-string-display ${this.props.className ||
					""}`}
			>
				{this.taggedStringToHtml(this.props.text)}
			</div>
		);
	}
}
class GuiLineElement {
	public id: number;
	private static idCounter = 0;
	constructor(public data: QalculationResult) {
		this.id = GuiLineElement.idCounter++;
	}
}
interface GuiState {
	lines: GuiLineElement[];
	currentInput: string;
	currentOutput: TaggedString;
}
export class GUILine extends React.Component<
	{
		line: GuiLineElement;
		index: number;
		onClickRemove: () => void;
		onClickInput: (g: GuiLineElement) => void;
		onClickUnit: (u: UnitNumber) => void;
	},
	{}
> {
	constructor(props: any) {
		super(props);
		this.state = { displayDepth: 0 };
	}
	render() {
		const data = this.props.line.data;
		const [inp, comment] = [data.input, ""]; //this.props.line.input.split("#");
		const isDefinition = data.type === "definition";
		return (
			<div className="gui-line">
				{/*<b>{this.props.index}.</b>*/}{" "}
				{comment ? <h4 className="comment">{comment}</h4> : ""}
				<button
					className="btn pull-right close"
					onClick={() => this.props.onClickRemove()}
				>
					×
				</button>
				{!isDefinition && (
					<div
						style={{ cursor: "pointer" }}
						onClick={() => this.props.onClickInput(this.props.line)}
					>
						<TaggedStringDisplay
							text={inp}
							onClickUnit={this.props.onClickUnit}
						/>
					</div>
				)}
				<TaggedStringDisplay
					className="block-response"
					text={
						isDefinition
							? data.output
							: TaggedString.t` = ${data.output}`
					}
					onClickUnit={this.props.onClickUnit}
				/>
				<hr />
			</div>
		);
	}
}
let guiInst: GUI;
const presetLines = `
sqrt(2 * ((100000 pound uranium_pure + 6 million tons * uranium_natural)) / (100000 pounds + 0.7% * 6 million tons)) to c   # speed a rocket could get with all the uranium on earth (E=1/2 mv^2 ⇒ v = sqrt(2Em))
1 kg charcoal to liter gasoline
solarluminosity / spheresurface(astronomicalunit) to kW/m^2 # maximum amount of energy a square meter on earth can get from the sun
5600 mAh * 11.7 V to Wh
100W * 10 days * 0.25€/kWh to €
7Mbit/s * 2h to Gbyte
32bit/(0.2bit/s) to s
88 mph to km/h|88 * mph = 0.03933952(km / s)
100°F to °C
`
	.split("\n")
	.map(line => line.trim())
	.filter(line => line.length > 0)
	.map(line => line.split("|")[0]);

type Serialized = {
	lines: string[];
};
async function loadPresetLines() {
	let presets = presetLines;
	let { state } = queryString.parse(location.hash);
	if (state) {
		const ser = JSON.parse(
			lzString.decompressFromEncodedURIComponent(state as string),
		) as Serialized;
		presets = ser.lines;
	}
	const lines = await Promise.all(
		presets.map(input =>
			qalculate(input)
				.then(data => new GuiLineElement(data))
				.catch(
					error =>
						new GuiLineElement({
							input: TaggedString.t`${input}`,
							output: new TaggedString("" + error),
							type: "error",
						}),
				),
		),
	);
	for (const line of lines) guiInst.addLine(line);
}

@observer
class UnitCompleteInput extends React.Component<
	{
		value: string;
		onChange: (value: string) => void;
	},
	{}
> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	@observable cursorIndexChars: number | null = null;
	@observable focused = false;
	inp: HTMLInputElement | null = null;
	setInput = (u: HTMLInputElement | null) => (this.inp = u);
	replaceCurrent = (u: string) => {
		let { tokens, cursorIndex } = this.tokens();
		if (cursorIndex !== null) {
			const before = tokens[cursorIndex];
			if (before.str === "to ") cursorIndex++;
			tokens[cursorIndex] = {
				str: u,
				type: TokenType.Identifier,
				start: 0,
			};
		}
		this.props.onChange(tokens.map(x => x.str).join(""));
	};
	tokens() {
		const tokens = [...tokenize(this.props.value)];
		if (!this.cursorIndexChars) return { tokens, cursorIndex: null };
		const cursorIndex = tokens.findIndex(
			t =>
				t.type !== TokenType.Whitespace &&
				t.start + t.str.length >= this.cursorIndexChars!,
		);
		return {
			tokens,
			cursorIndex: cursorIndex !== null ? cursorIndex : null,
		};
	}
	onChange: React.ChangeEventHandler<HTMLInputElement> = e =>
		this.props.onChange(e.currentTarget.value);
	onSelect: React.ReactEventHandler<HTMLInputElement> = e => (
		(this.focused = true),
		(this.cursorIndexChars = e.currentTarget.selectionStart)
	);
	render() {
		const { tokens, cursorIndex } = this.tokens();
		const cursorToken = cursorIndex !== null ? tokens[cursorIndex] : null;
		const poss: string[] = [];
		if (this.focused && cursorToken) {
			if (
				cursorIndex === tokens.length - 1 &&
				cursorToken.str === "to "
			) {
				try {
					const evaled = parseEvaluate(
						tokens
							.slice(0, cursorIndex)
							.map(x => x.str)
							.join(""),
					);
					const val = evaled.value;
					for (const name of scope.getAllUnits()) {
						const unit = scope.getUnit(name)!.value;
						if (
							!unit.isSpecial() &&
							unit.dimensions.equals(val.dimensions)
						)
							poss.push(name);
					}
				} catch (e) {
					console.log(e);
				}
			}
			if (cursorToken.type === TokenType.Identifier) {
				const units =
					poss.length > 0 ? poss.splice(0) : scope.getAllUnits();

				for (const unitName of units) {
					if (
						unitName.indexOf(cursorToken.str) >= 0 &&
						unitName !== cursorToken.str
					)
						poss.push(unitName);
					if (poss.length > 30) break;
				}
			}
		}
		return (
			<div className="unit-complete-input inline-query">
				<span className="prompt">> </span>
				<input
					value={this.props.value}
					onChange={this.onChange}
					onSelect={this.onSelect}
					onBlur={() => setTimeout(() => (this.focused = false), 500)}
					onFocus={this.onSelect}
					ref={this.setInput}
					size={this.props.value.length}
					autoCorrect={"off"}
					autoComplete={"off"}
					autoCapitalize={"none"}
					placeholder="enter formula"
				/>
				{poss.length > 0 ? (
					<ul className="dropdown-menu">
						{poss.map(unit => (
							<li key={unit}>
								<a
									href="#"
									onClick={() => this.replaceCurrent(unit)}
								>
									{unit}
								</a>
							</li>
						))}
					</ul>
				) : (
					""
				)}
			</div>
		);
	}
}
export class GUI extends React.Component<{}, GuiState> {
	constructor(props: {}) {
		super(props);
		guiInst = this;
		this.state = {
			lines: [],
			currentInput: "",
			currentOutput: new TaggedString(),
		};
		loadPresetLines();
	}
	addLine(line: GuiLineElement) {
		const lines = this.state.lines.slice();
		lines.unshift(line);
		this.setState({ lines } as any);
	}
	removeLine(index: number) {
		const lines = this.state.lines.slice();
		lines.splice(index, 1);
		this.setState({ lines: lines } as any);
	}
	onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const input = this.state.currentInput;
		if (input.trim().length > 0)
			qalculate(input)
				.then(data => this.addLine(new GuiLineElement(data)))
				.catch(reason => {
					console.error("could not qalc", input, reason);
					this.addLine(
						new GuiLineElement({
							input: TaggedString.t`${input}`,
							output: new TaggedString("" + reason),
							type: "error",
						}),
					);
				});
		this.setState({
			currentInput: "",
			currentOutput: new TaggedString(),
		} as any);
	};
	async setInput(input: string) {
		this.setState({ currentInput: input } as any);
		if (await qalculationHasSideeffect(input))
			this.setState({
				currentOutput: new TaggedString("press enter to execute"),
			} as any);
		else
			qalculate(input)
				.then(({ output }) => this.setState({ currentOutput: output }))
				.catch(reason =>
					this.setState({
						currentOutput: new TaggedString("" + reason),
					} as any),
				);
	}
	onChange = (v: string) => {
		this.setInput(v);
	};
	showUnit(unit: UnitNumber) {
		console.log("showing", unit);
		this.setInput(unit.toString());
	}
	render() {
		return (
			<div className="container calc-ui">
				<div className="page-header">
					<h1>Qalc</h1>
				</div>
				<div className="gui-line unit-complete">
					<form onSubmit={this.onSubmit}>
						<UnitCompleteInput
							onChange={this.onChange}
							value={this.state.currentInput}
						/>
						{this.state.currentOutput.vals.length > 0 ? (
							<TaggedStringDisplay
								className="inline-response"
								text={TaggedString.t` = ${
									this.state.currentOutput
								}`}
								onClickUnit={unit => this.showUnit(unit)}
							/>
						) : (
							""
						)}
					</form>
					<hr />
				</div>
				{this.state.lines.map((line, i) => (
					<GUILine
						key={line.id}
						index={i}
						line={line}
						onClickInput={() =>
							this.setInput(line.data.input.toString())
						}
						onClickUnit={unit => this.showUnit(unit)}
						onClickRemove={() => this.removeLine(i)}
					/>
				))}

				<footer>
					<small>
						<a
							href="#"
							onClick={e => {
								e.preventDefault();
								this.exportToUrl();
							}}
						>
							Export to URL
						</a>{" "}
						|{" "}
						<a href="https://github.com/phiresky/qalc-react">
							Source code on GitHub
						</a>
					</small>
				</footer>
			</div>
		);
	}
	componentDidUpdate(_prevProps: any, prevState: GuiState) {
		if (prevState.lines !== this.state.lines) {
			history.replaceState(
				{},
				"",
				window.location.pathname + window.location.search,
			);
		}
	}
	exportToUrl() {
		history.replaceState(
			{},
			"",
			"#" + queryString.stringify({ state: this.serialize() }),
		);
	}
	serialize() {
		return lzString.compressToEncodedURIComponent(
			JSON.stringify({
				lines: this.state.lines
					.map(line => line.data.input.toString())
					.reverse(),
			} as Serialized),
		);
	}
}

const gui = render(<GUI />, document.getElementById("app"));
Object.assign(window, { gui, qalculationHasSideeffect, qalculate });
