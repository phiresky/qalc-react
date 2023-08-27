import * as lzString from "lz-string";
import { makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { init } from "../../libqalc";
import { UnitNumber } from "../../unitNumber";
import { TaggedString } from "../../unitNumber/output";
import { GuiState, Serialized, UnitCompleter } from "../gui-store";
import { GUILine } from "./GUILine";
import { TaggedStringDisplay } from "./TaggedStringDisplay";
import { UnitCompleteInput } from "./UnitCompleteInput";

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

@observer
export class GUI extends React.Component<{
	presetLines?: string[];
	header: boolean;
	external: boolean;
	hideInputUntilClick?: boolean;
}> {
	guist = new GuiState();
	completer = new UnitCompleter(this.guist);
	@observable showInput = !this.props.hideInputUntilClick;

	constructor(props: GUI["props"]) {
		super(props);

		makeObservable(this, {
			guist: observable,
			completer: observable,
		});

		void this.init();
	}
	async init(): Promise<void> {
		await init();
		await this.loadPresetLines();
	}
	async loadPresetLines() {
		let presets = this.props.presetLines ?? presetLines;
		const state = new URLSearchParams(location.hash.substr(1)).get("state");
		if (state) {
			const str = lzString.decompressFromEncodedURIComponent(
				state as string,
			);
			if (str) {
				const ser = JSON.parse(str) as Serialized;
				presets = ser.lines;
			}
		}
		const savedHistory = localStorage.getItem("qalc-history");
		if (savedHistory) {
			const str = lzString.decompressFromUTF16(savedHistory);
			if (str) {
				const ser = JSON.parse(str) as Serialized;
				presets = ser.lines;
			}
		}
		await this.guist.loadPresets(presets);
	}

	onSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
		evt.preventDefault();
		this.guist.submit();
		setTimeout(() => this.guist.exportToHistory(), 1000);
	};

	onChange = (v: string): void => {
		void this.guist.setInput(v);
	};
	showUnit(unit: UnitNumber): void {
		console.log("showing", unit);
		this.showInput = true;
		void this.guist.setInput(unit.toString());
	}
	render(): React.ReactNode {
		return (
			<div className="container calc-ui">
				{this.props.header && (
					<div className="page-header">
						<h1>Qalc</h1>
					</div>
				)}
				{this.showInput && (
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
				)}
				{this.guist.lines.map((line, i) => (
					<GUILine
						key={line.id}
						index={i}
						line={line}
						onClickInput={() => {
							this.showInput = true;
							this.guist.setInput(line.data.input.toString());
						}}
						onClickUnit={(unit) => this.showUnit(unit)}
						onClickRemove={() => this.guist.removeLine(i)}
					/>
				))}

				<footer>
					{this.props.external ? (
						<small>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									location.href =
										"https://phiresky.github.io/qalc-react/" +
										this.guist.getUrlHash();
								}}
							>
								Get permalink
							</a>
						</small>
					) : (
						<small>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									this.guist.exportToUrl();
								}}
							>
								Export to URL
							</a>
							{" | "}
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									this.guist.clearHistory();
								}}
							>
								Clear History
							</a>
							{" | "}
							<a href="https://github.com/phiresky/qalc-react">
								Source code on GitHub
							</a>
						</small>
					)}
				</footer>
			</div>
		);
	}
}
