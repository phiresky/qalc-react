import * as React from 'react';
import lzString from 'lz-string';
import * as ReactDOM from 'react-dom';
import * as QalcLib from './evaluator';
import {UnitNumber} from './unitNumber';
import {TaggedString} from './output';
import queryString from 'query-string';

class UnitNumberDisplay extends React.Component<{ text: TaggedString, onClickUnit: (u: UnitNumber) => void }, {}> {
	constructor(props: { text: TaggedString, onClickUnit: any }) {
		super(props);
	}
	taggedStringToHtml(str: TaggedString):any[] {
		return str.vals.map((x,i) => {
			if (typeof x === 'string') return <span key={i}>{x}</span>;
			else if (x instanceof UnitNumber) return <a key={i} href="#" onClick={(e) => { this.props.onClickUnit(x as any); e.preventDefault() } } >{x.toString() }</a>;
			else if(x instanceof TaggedString) return this.taggedStringToHtml(x);
		}) 
	}
	render() {
		return <pre style={{whiteSpace:"pre-wrap"}}>{this.taggedStringToHtml(this.props.text)}</pre>;
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
	currentInput: string; currentOutput: TaggedString;
}
export class GUILine extends React.Component<{ line: GuiLineElement,
		onClickRemove: () => void,
		onClickInput: (g: GuiLineElement) => void,
		onClickUnit: (u: UnitNumber) => void }, {}> {
	constructor(props: any) {
		super(props);
		this.state = { displayDepth: 0 };
	}
	render() {
		const [inp, comment] = this.props.line.input.split("#");
		return <div className="gui-line" >
			{comment?<h4>{comment}</h4>:""}
			<button className="btn pull-right close" onClick={() => this.props.onClickRemove()}>×</button>
			<p style={{ cursor: "pointer" }} onClick={() => this.props.onClickInput(this.props.line) }>> {inp}</p>
			<UnitNumberDisplay text={this.props.line.output} onClickUnit={this.props.onClickUnit}/>
			<hr />
		</div>
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
`.split("\n").map(line => line.trim()).filter(line => line.length > 0).map(line => line.split("|")[0]);
function loadPresetLines() {
	let presets = presetLines;
	let {state} = queryString.parse(location.hash);
	if(state) presets = JSON.parse(lzString.decompressFromEncodedURIComponent(state));
	presets.map(input => QalcLib.qalculate(input)
			.then(output => guiInst.addLine(new GuiLineElement(input, output)))
			.catch(error => guiInst.addLine(new GuiLineElement(input, new TaggedString("" + error))))
		);
}
export class GUI extends React.Component<{}, GuiState> {
	constructor(props: {}) {
		super(props);
		guiInst = this;
		this.state = { lines: [], currentInput: "", currentOutput: new TaggedString() };
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
		this.setState({lines: lines} as any);
	}
	keyPress(evt: KeyboardEvent) {
		const target = evt.target as HTMLInputElement;
		const input = target.value;
		if (evt.charCode == 13) {// enter
			if (input.trim().length > 0) QalcLib.qalculate(input).then(output =>
				this.addLine(new GuiLineElement(input, output))
			).catch(reason => this.addLine(new GuiLineElement(input, new TaggedString("" + reason))))
			this.setState({currentInput: "", currentOutput: new TaggedString()} as any);
		}
	}
	setInput(input: string) {
		this.setState({currentInput: input} as any);
		if(/[=≈]/.test(input)) this.setState({currentOutput: new TaggedString("press enter to execute")} as any);
		else QalcLib.qalculate(input)
		.then(output => this.setState({currentOutput: output} as any))
		.catch(reason => this.setState({currentOutput: new TaggedString("" + reason)} as any));
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
		return <div>
			<div className="gui-line" >
				<p>> <input onChange={this.onChange.bind(this) } 
					autoCorrect={"off"} autoComplete={"off"} autoCapitalize={"none"}
					onKeyPress={this.keyPress.bind(this)} value={this.state.currentInput} style={{width:"90%"}} /></p>
				{this.state.currentOutput.vals.length>0?<UnitNumberDisplay text={this.state.currentOutput} onClickUnit={unit => this.showUnit(unit)}/>:""}
				<hr />
			</div>
			{this.state.lines.map((line,i) => <GUILine key={line.id} line={line}
				onClickInput={() => this.setInput(line.input) }
				onClickUnit={unit => this.showUnit(unit) }
				onClickRemove={() => this.removeLine(i) } />) }
		</div>;
	}
	componentDidUpdate(prevProps: any, prevState: GuiState) {
		//window.scrollTo(0, 1e10);
		if(prevState.lines !== this.state.lines) {
			history.replaceState({}, "", "#" + queryString.stringify({state:this.serialize()}));
		}
	}
	serialize() {
		return lzString.compressToEncodedURIComponent(JSON.stringify(this.state.lines.map(line => line.input)));
	}
}

ReactDOM.render(
	<div className="container">
		<div className="page-header">
			<h1>Qalc</h1>
		</div>
		<GUI />
		<footer><small><a href="https://github.com/phiresky/qalc-react">Source code on GitHub</a></small></footer>
	</div>, document.getElementById("root"));