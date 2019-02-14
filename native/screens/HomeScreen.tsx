import React from "react";
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput,
	TouchableHighlight,
	Button,
} from "react-native";
import { WebBrowser } from "expo";

import Modal from "react-native-modal";
import { MonoText } from "../components/StyledText";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { GuiState, GuiLineElement } from "qalc-react/src/ui/gui-store";
import { TaggedString } from "qalc-react/src/unitNumber/output";
import { UnitNumber } from "qalc-react/src/unitNumber";
import { Header } from "react-navigation";
class TaggedStringView extends React.Component<{
	children: TaggedString;
	onClickUnit: (u: UnitNumber) => void;
}> {
	taggedStringToView(str: TaggedString): any[] {
		return str.vals.map((x, i) => {
			if (typeof x === "string") return x;
			else if (x instanceof UnitNumber) {
				/*if (
					this.props.ignore &&
					this.props.ignore.some(i => i.id === x.id)
				)
					return <span key={i}>{x.toString()}</span>;*/
				return (
					<Text
						key={i}
						style={styles.clickableUnit}
						onPress={() => this.props.onClickUnit(x)}
					>
						{x.toString()}
					</Text>
				);
			} else if (x instanceof TaggedString)
				return this.taggedStringToView(x);
			else throw Error("unknown value");
		});
	}
	render() {
		const t = this.props.children;
		return <Text>{this.taggedStringToView(t)}</Text>;
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
			<>
				<View style={styles.guiLine}>
					<View style={styles.guiLineInner}>
						{comment ? (
							<Text style={styles.comment}>{comment}</Text>
						) : null}

						{!isDefinition && (
							<TaggedStringView
								onClickUnit={this.props.onClickUnit}
							>
								{input}
							</TaggedStringView>
						)}
						<TaggedStringView onClickUnit={this.props.onClickUnit}>
							{isDefinition
								? output
								: TaggedString.t` = ${output}`}
						</TaggedStringView>
					</View>
					<View style={styles.closeButton}>
						<Button
							title="×"
							onPress={() => this.props.onClickRemove()}
						/>
					</View>
				</View>
				<View
					style={{
						borderBottomColor: "black",
						borderBottomWidth: 1,
					}}
				/>
			</>
		);
	}
}

@observer
export default class HomeScreen extends React.Component {
	@observable inp = new GuiState();
	constructor(p: any) {
		super(p);
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
			.map(line => line.trim())
			.filter(line => line.length > 0);
		this.inp.loadPresets(presetLines);
	}

	static navigationOptions = {
		title: "Unit Calc",
		headerStyle: {
			backgroundColor: "#f4511e",
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold",
		},
	};

	setInput = (text: string) => {
		this.inp.setInput(text);
	};

	@observable modalVisible: TaggedString | false = false;

	showUnit = async (unit: UnitNumber) => {
		console.log("showing", unit);
		this.modalVisible = await this.inp.calcToString(unit.toString());
	};

	submit = () => {
		this.inp.submit();
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}
					bounces={true}
				>
					<View
						style={{
							flexDirection: "row",
							borderColor: "gray",
							borderWidth: 1,
							alignItems: "center",
						}}
					>
						<Text>> </Text>
						<TextInput
							style={{
								flexGrow: 1,
							}}
							onChangeText={this.setInput}
							onSubmitEditing={this.submit}
							value={this.inp.currentInput}
						/>
					</View>
					<View style={styles.intermediaryOutput}>
						<TaggedStringView onClickUnit={this.showUnit}>
							{this.inp.currentOutput}
						</TaggedStringView>
					</View>
					<View>
						{this.inp.lines.map((line, i) => (
							<GUILine
								key={line.id}
								index={i}
								line={line}
								onClickInput={() =>
									this.inp.setInput(
										line.data.input.toString(),
									)
								}
								onClickUnit={unit => this.showUnit(unit)}
								onClickRemove={() => this.inp.removeLine(i)}
							/>
						))}
					</View>
				</ScrollView>
				<Modal
					onBackdropPress={() => (this.modalVisible = false)}
					isVisible={!!this.modalVisible}
					backdropColor="black"
					backdropOpacity={0.5}
				>
					<View style={styles.modalContent}>
						<ScrollView>
							<TaggedStringView onClickUnit={this.showUnit}>
								{this.modalVisible || TaggedString.t``}
							</TaggedStringView>
						</ScrollView>

						<TouchableHighlight
							style={{
								alignItems: "center",
								backgroundColor: "#DDDDDD",
								padding: 10,
							}}
							onPress={() => (this.modalVisible = false)}
						>
							<Text>Hide</Text>
						</TouchableHighlight>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	comment: {},
	guiLine: {
		flexDirection: "row",
		padding: 10,
	},
	guiLineInner: {
		flexGrow: 1,
		flexShrink: 1,
	},
	closeButton: {
		//position: "absolute",
		//right: 0,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	intermediaryOutput: {
		borderColor: "gray",
		borderRadius: 4,
		borderWidth: 1,
	},
	modalContent: {
		backgroundColor: "white",
		margin: 0,
		padding: 22,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		borderColor: "rgba(0, 0, 0, 0.1)",
	},
	developmentModeText: {
		marginBottom: 20,
		color: "rgba(0,0,0,0.4)",
		fontSize: 14,
		lineHeight: 19,
		textAlign: "center",
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: "contain",
		marginTop: 3,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
		color: "rgba(96,100,109, 0.8)",
	},
	codeHighlightContainer: {
		backgroundColor: "rgba(0,0,0,0.05)",
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		color: "rgba(96,100,109, 1)",
		lineHeight: 24,
		textAlign: "center",
	},
	tabBarInfoText: {
		fontSize: 17,
		color: "rgba(96,100,109, 1)",
		textAlign: "center",
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: "center",
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: "#2e78b7",
	},
	clickableUnit: {
		color: "#2e78b7",
	},
});
