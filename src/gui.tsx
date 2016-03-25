import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as QalcLib from './Qalc';

class GuiLineElement {
	public id: number;
	private static idCounter = 0;
	constructor(public input: string, public output: any) {
		this.id = GuiLineElement.idCounter++;
	}
}
interface GuiState {
	lines: GuiLineElement[];
}
export class GUILine extends React.Component<{ line: GuiLineElement, onClick:(g:GuiLineElement) => void }, {displayDepth: number}> {
	constructor(props: any) {
		super(props);
		this.state = {displayDepth: 0};
	}
	render() {
		return <div className="gui-line" ><hr />
				<p style={{cursor:"pointer"}} onClick={() => this.props.onClick(this.props.line)}>> {this.props.line.input}</p>
				<pre onClick={() => this.setState({displayDepth:this.state.displayDepth+1})}><code>{this.props.line.output.toString(this.state.displayDepth)}</code></pre>
			</div>
	}
}
let guiInst: GUI;
const presetLines = `
5600 mA h * 11.7 V to W h
100W * 10 days * 0.25€/kWh to €
7Mbit/s * 2h to Gbyte
32bit/(0.2bit/s) to s
88 mph to km/h|88 * mph = 0.03933952(km / s)
sqrt(2 * (6 million tons * 500000 MJ/kg) / (100000 pounds))/c|sqrt((2 * ((6 * million * tonne * 500000 * megajoule) / kilogram)) / (100000 * pound)) / speed_of_light = approx. 1.2131711

`;
function loadPresetLines() {
	presetLines.split('\n')
		.map(line => line.trim())
		.filter(line => line.length > 0)
		.map(line => line.split("|")[0])
		.map(input => QalcLib.qalculate(input)
			.then(output => guiInst.addLine(new GuiLineElement(input, output)))
			.catch(error => guiInst.addLine(new GuiLineElement(input, error)))
		);
}
export class GUI extends React.Component<{}, GuiState> {
	constructor(props:{}) {
		super(props);
		guiInst = this;
		this.state = {lines: []};
		loadPresetLines();
	}
	addLine(line: GuiLineElement) {
		const lines = this.state.lines.slice();
		lines.unshift(line);
		this.setState({ lines: lines });
	}
	keyPress(evt: KeyboardEvent) {
		if (evt.charCode == 13) {// enter
			const target = evt.target as HTMLInputElement;
			const input = target.value.trim();
			if(input.length > 0) QalcLib.qalculate(input).then(output => 
				this.addLine(new GuiLineElement(input, output))
			).catch(reason => this.addLine(new GuiLineElement(input, reason)))
			target.value = "";
		}
	}
	render() {
		return <div>
			> <input onKeyPress={this.keyPress.bind(this) } ref="inp" class="form-input" />
			{this.state.lines.map(line => <GUILine key={line.id} line={line} onClick={(line) => (this.refs["inp"] as HTMLInputElement).value = line.input } />) }
			</div>;
	}
}

ReactDOM.render(
<div className="container">
	<div className="page-header">
		<h1>Qalc</h1>
	</div>
	<GUI />
</div>, document.getElementById("root"));