import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as QalcLib from './Qalc';

module QalcGui {
	class GuiLineElement {
		public id: number;
		private static idCounter = 0;
		constructor(public input: string, public output: string) {
			this.id = GuiLineElement.idCounter++;
		}
	}
	interface GuiState {
		lines: GuiLineElement[];
	}
	export class GUILine extends React.Component<{ line: GuiLineElement }, {}> {
		render() {
			return <div className="gui-line"><hr />
					<p>> {this.props.line.input}</p>
					<pre><code>{this.props.line.output}</code></pre>
				</div>
		}
	}
	let guiInst: GUI;
	export class GUI extends React.Component<{}, GuiState> {
		constructor(props:{}) {
			super(props);
			guiInst = this;
			this.state = {"lines":[new GuiLineElement("88 mph to km/s","88 * mph = 0.03933952(km / s)\n"), new GuiLineElement("sqrt(2 * (6 million tons * 500000 MJ/kg) / (100000 pounds))/c","sqrt((2 * ((6 * million * tonne * 500000 * megajoule) / kilogram)) / (100000 * pound)) / speed_of_light = approx. 1.2131711\n"),new GuiLineElement("testing","tonne * e * second * tonne * inch * gram = approx. 2718.2818 kg^3 * in*s\n")]}
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
				);
				target.value = "";
			}
		}
		render() {
			return <div>
				> <input onKeyPress={this.keyPress.bind(this) } />
				{this.state.lines.map(line => <GUILine key={line.id} line={line} />) }
				</div>;
		}
	}
}
ReactDOM.render(
<div className="container">
	<div className="page-header">
		<h1>Qalc</h1>
	</div>
	<QalcGui.GUI />
</div>, document.getElementById("root"));