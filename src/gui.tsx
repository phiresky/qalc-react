import * as React from "react";
import lzString from "lz-string";
import { qalculate, qalculationHasSideeffect, parseEvaluate } from "./libqalc";
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
			this.definition = await qalculate(this.props.unit.id!);
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
						overlay={() => (
							<DefinitionOvelay
								unit={x}
								onClickUnit={this.props.onClickUnit}
							/>
						)}
					>
						<a
							href="#"
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
			<pre style={{ whiteSpace: "pre-wrap" }}>
				{this.taggedStringToHtml(this.props.text)}
			</pre>
		);
	}
}
class GuiLineElement {
	public id: number;
	private static idCounter = 0;
	constructor(public input: string, public output: TaggedString) {
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
		const [inp, comment] = this.props.line.input.split("#");
		return (
			<div className="gui-line">
				{comment ? <h4>{comment}</h4> : ""}
				<button
					className="btn pull-right close"
					onClick={() => this.props.onClickRemove()}
				>
					×
				</button>
				<p
					style={{ cursor: "pointer" }}
					onClick={() => this.props.onClickInput(this.props.line)}
				>
					> {inp}
				</p>
				<TaggedStringDisplay
					text={this.props.line.output}
					onClickUnit={this.props.onClickUnit}
				/>
				<hr />
			</div>
		);
	}
}
let guiInst: GUI;
const presetLines = `
sqrt(2 * (6 million tons * uranium_natural) / (100000 pounds + 0.7% * 6 million tons)) to c  # speed a rocket could get with all the uranium on earth (E=1/2 mv^2)
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
async function loadPresetLines() {
	let presets = presetLines;
	let { state } = queryString.parse(location.hash);
	if (state)
		presets = JSON.parse(
			lzString.decompressFromEncodedURIComponent(state as string),
		);
	const lines = await Promise.all(
		presets.map(input =>
			qalculate(input)
				.then(output => new GuiLineElement(input, output))
				.catch(
					error =>
						new GuiLineElement(input, new TaggedString("" + error)),
				),
		),
	);
	for (const line of lines) guiInst.addLine(line);
}

class UnitCompleteInput extends React.Component<
	{
		value: string;
		onChange: React.FormEventHandler<any>;
	},
	{}
> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	setUnit(unit: string) {
		// hacky
		const val = this.props.value.split(" ");
		val.pop();
		val.push(unit, "");
		(this.refs["inp"] as HTMLInputElement).value = val.join(" ");
		this.props.onChange({ target: this.refs["inp"] } as any);
	}
	render() {
		const tokens = this.props.value.split(" "); // hacky (chrome bug when use tokenize)
		const last = tokens.pop()!;
		const poss: string[] = [];
		if (tokens.pop() === "to") {
			try {
				const evaled = parseEvaluate(tokens.join(" "));
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
		if (/[a-z]/i.test(last)) {
			const units =
				poss.length > 0 ? poss.splice(0) : scope.getAllUnits();

			for (const unitName of units) {
				if (unitName.indexOf(last) >= 0) poss.push(unitName);
				if (poss.length > 30) break;
			}
		}
		return (
			<div className="dropdown">
				<input
					{...this.props}
					ref="inp"
					autoCorrect={"off"}
					autoComplete={"off"}
					autoCapitalize={"none"}
					className="form-control"
					placeholder="enter formula"
				/>
				{poss.length > 0 ? (
					<ul
						className="dropdown-menu"
						style={{
							display: "block",
							maxHeight: "200px",
							overflowX: "hidden",
							position: "inherit",
						}}
					>
						{poss.map(unit => (
							<li key={unit}>
								<a href="#" onClick={() => this.setUnit(unit)}>
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
	onSubmit(evt: Event) {
		evt.preventDefault();
		const input = this.state.currentInput;
		if (input.trim().length > 0)
			qalculate(input)
				.then(output => this.addLine(new GuiLineElement(input, output)))
				.catch(reason => {
					console.error("could not qalc", input, reason);
					this.addLine(
						new GuiLineElement(
							input,
							new TaggedString("" + reason),
						),
					);
				});
		this.setState({
			currentInput: "",
			currentOutput: new TaggedString(),
		} as any);
	}
	async setInput(input: string) {
		this.setState({ currentInput: input } as any);
		if (await qalculationHasSideeffect(input))
			this.setState({
				currentOutput: new TaggedString("press enter to execute"),
			} as any);
		else
			qalculate(input)
				.then(output => this.setState({ currentOutput: output } as any))
				.catch(reason =>
					this.setState({
						currentOutput: new TaggedString("" + reason),
					} as any),
				);
	}
	onChange(evt: Event) {
		const target = evt.target as HTMLInputElement;
		this.setInput(target.value);
	}
	showUnit(unit: UnitNumber) {
		console.log("showing", unit);
		this.setInput(unit.toString());
	}
	render() {
		return (
			<div className="container">
				<div className="page-header">
					<h1>Qalc</h1>
				</div>
				<div className="gui-line">
					<form className="form" onSubmit={this.onSubmit.bind(this)}>
						<UnitCompleteInput
							onChange={this.onChange.bind(this)}
							value={this.state.currentInput}
						/>
					</form>
					{this.state.currentOutput.vals.length > 0 ? (
						<TaggedStringDisplay
							text={this.state.currentOutput}
							onClickUnit={unit => this.showUnit(unit)}
						/>
					) : (
						""
					)}
					<hr />
				</div>
				{this.state.lines.map((line, i) => (
					<GUILine
						key={line.id}
						line={line}
						onClickInput={() => this.setInput(line.input)}
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
			JSON.stringify(this.state.lines.map(line => line.input)),
		);
	}
}

const gui = render(<GUI />, document.getElementById("app"));
Object.assign(window, { gui });
