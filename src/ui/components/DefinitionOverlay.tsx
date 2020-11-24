import { makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { qalculate } from "../../libqalc";
import { UnitNumber } from "../../unitNumber";
import { TaggedString } from "../../unitNumber/output";
import { TaggedStringDisplay } from "./TaggedStringDisplay";

@observer
export class DefinitionOverlay extends React.Component<{
	unit: UnitNumber;
	onClickUnit: (u: UnitNumber) => void;
}> {
	definition: TaggedString | null = null;
	constructor(p: DefinitionOverlay["props"]) {
		super(p);

		makeObservable(this, {
			definition: observable,
		});

		void this.load();
	}
	async load(): Promise<void> {
		try {
			this.definition = (await qalculate(this.props.unit.id!)).output;
		} catch (e: any) {
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
}
