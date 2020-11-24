import Tooltip from "rc-tooltip";
import React from "react";
import { UnitNumber } from "../../unitNumber";
import { TaggedString } from "../../unitNumber/output";
import { DefinitionOverlay } from "./DefinitionOverlay";
type EleArray = (EleArray | JSX.Element)[];

export class TaggedStringDisplay extends React.Component<{
	className?: string;
	text: TaggedString;
	ignore?: UnitNumber[];
	onClickUnit: (u: UnitNumber) => void;
}> {
	constructor(props: any) {
		super(props);
	}
	taggedStringToHtml(str: TaggedString): EleArray {
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
							<DefinitionOverlay
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
