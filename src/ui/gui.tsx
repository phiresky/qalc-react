import lzString from "lz-string";
import { observable, makeObservable } from "mobx";
import { observer } from "mobx-react";
import * as queryString from "query-string";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import * as React from "react";
import { render } from "react-dom";
import { qalculate, qalculationHasSideeffect } from "../libqalc";
import "../../style.scss";
import { UnitNumber } from "../unitNumber";
import { GuiLineElement, GuiState, UnitCompleter } from "./gui-store";
import { TaggedString } from "../unitNumber/output";

const DefinitionOvelay = observer(
	class DefinitionOvelay extends React.Component<{
		unit: UnitNumber;
		onClickUnit: (u: UnitNumber) => void;
	}> {
		definition: TaggedString | null = null;
		constructor(p: any) {
			super(p);

			makeObservable(this, {
				definition: observable,
			});

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
	},
);

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
					this.props.ignore.some((i) => i.id === x.id)
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
							onClick={(e) => {
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
				className={`tagged-string-display ${
					this.props.className || ""
				}`}
			>
				{this.taggedStringToHtml(this.props.text)}
			</div>
		);
	}
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
		const { type, comment, input, output } = this.props.line.data;
		const isDefinition = type === "definition";
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
							text={input}
							onClickUnit={this.props.onClickUnit}
						/>
					</div>
				)}
				<TaggedStringDisplay
					className="block-response"
					text={isDefinition ? output : TaggedString.t` = ${output}`}
					onClickUnit={this.props.onClickUnit}
				/>
				<hr />
			</div>
		);
	}
}
let guiInst: GUI;
const presetLines = `
sqrt(2 * ((100000 pound uranium_pure + 6 million tons * uranium_natural)) / (100000 pounds + 0.7% * 6 million tons)) to c   # speed a rocket could get with all the uranium on earth (E=1/2 mv^2 ⇒ v = sqrt(2E/m))
1 kg charcoal to liter gasoline # energy density conversion
solarluminosity / spheresurface(astronomicalunit) to kW/m^2 # maximum amount of energy a square meter on earth can get from the sun
3200 mAh * 3.7 V to Wh # energy in a phone battery
100W * 10 days * 0.25€/kWh to € # cost of energy consumption of a 100W device over 10 days
16Mbit/s * 2h to Gbyte # How much can you download in 2 hours with a 16Mbit connection?
88 mph to km/h
100°F to °C
`
	.split("\n")
	.map((line) => line.trim())
	.filter((line) => line.length > 0);

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
	guiInst.guist.loadPresets(presets);
}

const UnitCompleteInput = observer(
	class UnitCompleteInput extends React.Component<{
		completer: UnitCompleter;
	}> {
		focused = false;
		inpRef = React.createRef<HTMLInputElement>();

		onSelect: React.ReactEventHandler<HTMLInputElement> = (e) => (
			(this.focused = true),
			(this.props.completer.cursorIndexChars =
				e.currentTarget.selectionStart)
		);

		constructor(props: { completer: UnitCompleter }) {
			super(props);

			makeObservable(this, {
				focused: observable,
				inpRef: observable,
			});
		}

		render() {
			const poss = this.focused
				? this.props.completer.getPossibleUnits()
				: [];
			return (
				<div className="unit-complete-input inline-query">
					<span className="prompt">{">"} </span>
					<input
						value={this.props.completer.target.currentInput}
						onChange={(e) =>
							this.props.completer.target.setInput(
								e.currentTarget.value,
							)
						}
						onSelect={this.onSelect}
						onBlur={() =>
							setTimeout(() => (this.focused = false), 500)
						}
						onFocus={this.onSelect}
						ref={this.inpRef}
						size={this.props.completer.target.currentInput.length}
						autoCorrect={"off"}
						autoComplete={"off"}
						autoCapitalize={"none"}
						placeholder="enter formula"
					/>
					{poss.length > 0 ? (
						<ul className="dropdown-menu">
							{poss.map((unit) => (
								<li key={unit}>
									<a
										href="#"
										onClick={() =>
											this.props.completer.replaceCurrent(
												unit,
											)
										}
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
	},
);

export const GUI = observer(
	class GUI extends React.Component {
		guist = new GuiState();
		completer = new UnitCompleter(this.guist);

		constructor(props: {}) {
			super(props);

			makeObservable(this, {
				guist: observable,
				completer: observable,
			});

			guiInst = this;

			loadPresetLines();
		}

		onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
			evt.preventDefault();
			this.guist.submit();
		};

		onChange = (v: string) => {
			this.guist.setInput(v);
		};
		showUnit(unit: UnitNumber) {
			console.log("showing", unit);
			this.guist.setInput(unit.toString());
		}
		render() {
			return (
				<div className="container calc-ui">
					<div className="page-header">
						<h1>Qalc</h1>
					</div>
					<div className="gui-line unit-complete">
						<form onSubmit={this.onSubmit}>
							<UnitCompleteInput completer={this.completer} />
							{this.guist.currentOutput.vals.length > 0 ? (
								<TaggedStringDisplay
									className="inline-response"
									text={TaggedString.t` = ${this.guist.currentOutput}`}
									onClickUnit={(unit) => this.showUnit(unit)}
								/>
							) : (
								""
							)}
						</form>
						<hr />
					</div>
					{this.guist.lines.map((line, i) => (
						<GUILine
							key={line.id}
							index={i}
							line={line}
							onClickInput={() =>
								this.guist.setInput(line.data.input.toString())
							}
							onClickUnit={(unit) => this.showUnit(unit)}
							onClickRemove={() => this.guist.removeLine(i)}
						/>
					))}

					<footer>
						<small>
							<a
								href="#"
								onClick={(e) => {
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
					lines: this.guist.lines
						.map((line) => line.data.input.toString())
						.reverse(),
				} as Serialized),
			);
		}
	},
);

const gui = render(<GUI />, document.getElementById("app"));
Object.assign(window, { gui, qalculationHasSideeffect, qalculate });
