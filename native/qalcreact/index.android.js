/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	TouchableHighlight,
} from "react-native";
import { qalculate } from "./qalc.build.js";

function reverseMap(arr, fn) {
	const arr2 = new Array(arr.length);
	for (let i = arr.length - 1; i >= 0; i--) {
		arr2[arr.length - 1 - i] = fn(arr[i], i);
	}
	return arr2;
}

class QalcHistory extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				{reverseMap(this.props.calculations, ({ input, output }, i) => (
					<TouchableHighlight
						key={i}
						onPress={() =>
							this.props.onCalculationPressed({ input, output })
						}
					>
						<View style={styles.calculation}>
							<Text style={styles.calculationInput}>{input}</Text>
							<Text style={styles.calculationOutput}>
								{""}
								{output}
							</Text>
						</View>
					</TouchableHighlight>
				))}
			</ScrollView>
		);
	}
}

const presetLines = `
	5600 mA h * 11.7 V to W h
	100W * 10 days * 0.25€/kWh
	7MBit/s * 2h to GByte
	32bit/(0.2bit/s) to s
	88 mph to km/s|88 * mph = 0.03933952(km / s)
	sqrt(2 * (6 million tons * 500000 MJ/kg) / (100000 pounds))/c to 1|sqrt((2 * ((6 * million * tonne * 500000 * megajoule) / kilogram)) / (100000 * pound)) / speed_of_light = approx. 1.2131711
	
	`
	.split("\n")
	.reverse()
	.map(line => line.trim())
	.filter(line => line.length > 0)
	.map(line => line.split("|")[0]);

class QalcGui extends Component {
	constructor() {
		super();
		this.state = { text: "", calculations: [] };

		presetLines.map(input =>
			qalculate(input).then(output => this.addLine({ input, output })),
		);
	}
	addLine(line) {
		const calcs = this.state.calculations.slice();
		calcs.push(line);
		this.setState({ calculations: calcs });
	}
	qalc() {
		const input = this.state.text;
		qalculate(input).then(output => this.addLine({ input, output }));
		this.setState({ text: "" });
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Qalc</Text>
				<View style={styles.inputLine}>
					<TextInput
						autoCorrect={false}
						autoCapitalize="none"
						value={this.state.text}
						placeholder="Enter formula"
						style={styles.textInput}
						onChangeText={text => this.setState({ text })}
						onSubmitEditing={this.qalc.bind(this)}
					/>
					<TouchableHighlight
						style={styles.calculateButton}
						onPress={() => this.qalc()}
					>
						<Text style={styles.calculateButtonText}>→</Text>
					</TouchableHighlight>
				</View>
				<QalcHistory
					calculations={this.state.calculations}
					onCalculationPressed={({ input }) =>
						this.setState({ text: input })
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	welcome: {
		fontSize: 30,
		textAlign: "center",
		margin: 10,
	},
	calculation: {
		margin: 10,
		padding: 5,
		backgroundColor: "#eee",
	},
	calculationInput: {
		color: "#444",
	},
	calculationOutput: {
		color: "black",
		fontSize: 20,
		marginLeft: 20,
	},
	textInput: {
		fontSize: 20,
		flex: 1,
	},
	inputLine: {
		flexDirection: "row",
	},
	calculateButton: {
		width: 50,
	},
	calculateButtonText: {
		fontSize: 50,
		textAlign: "left",
		fontWeight: "bold",
	},
});

AppRegistry.registerComponent("qalcreact", () => QalcGui);
