import "rc-tooltip/assets/bootstrap_white.css";
import * as React from "react";
import { UnitNumber } from "../../unitNumber";
import { TaggedString } from "../../unitNumber/output";
import { GuiLineElement } from "../gui-store";
import { TaggedStringDisplay } from "./TaggedStringDisplay";

export class GUILine extends React.Component<{
	line: GuiLineElement;
	index: number;
	onClickRemove: () => void;
	onClickInput: (g: GuiLineElement) => void;
	onClickUnit: (u: UnitNumber) => void;
}> {
	constructor(props: GUILine["props"]) {
		super(props);
		this.state = { displayDepth: 0 };
	}
	render(): JSX.Element {
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
