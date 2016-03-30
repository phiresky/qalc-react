import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as QalcLib from './evaluator';
import {UnitNumber} from './unitNumber';
import {TaggedString} from './output';

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
		return <pre>{this.taggedStringToHtml(this.props.text)}</pre>;
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
export class GUILine extends React.Component<{ line: GuiLineElement, onClickInput: (g: GuiLineElement) => void, onClickUnit: (u: UnitNumber) => void }, {}> {
	constructor(props: any) {
		super(props);
		this.state = { displayDepth: 0 };
	}
	render() {
		return <div className="gui-line" >
			<p style={{ cursor: "pointer" }} onClick={() => this.props.onClickInput(this.props.line) }>> {this.props.line.input}</p>
			<UnitNumberDisplay text={this.props.line.output} onClickUnit={this.props.onClickUnit}/>
			<hr />
		</div>
	}
}
let guiInst: GUI;
const presetLines = `
5600 mAh * 11.7 V to Wh
100W * 10 days * 0.25€/kWh to €
7Mbit/s * 2h to Gbyte
32bit/(0.2bit/s) to s
88 mph to km/h|88 * mph = 0.03933952(km / s)
100°F to °C
sqrt(2 * (6 million tons * 500000 MJ/kg) / (100000 pounds))/c|sqrt((2 * ((6 * million * tonne * 500000 * megajoule) / kilogram)) / (100000 * pound)) / speed_of_light = approx. 1.2131711

`;
function loadPresetLines() {
	presetLines.split('\n')
		.map(line => line.trim())
		.filter(line => line.length > 0)
		.map(line => line.split("|")[0])
		.map(input => QalcLib.qalculate(input)
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
			{this.state.lines.map(line => <GUILine key={line.id} line={line}
				onClickInput={(line) => this.setInput(line.input) }
				onClickUnit={unit => this.showUnit(unit) }
				/>) }
		</div>;
	}
	componentDidUpdate() {
		//window.scrollTo(0, 1e10);
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