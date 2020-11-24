import { action, makeObservable, observable } from "mobx";
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

	@action
	private setDefinition(d: TaggedString | null) {
		this.definition = d;
	}

	async load(): Promise<void> {
		try {
			this.setDefinition((await qalculate(this.props.unit.id!)).output);
		} catch (e: any) {
			this.setDefinition(new TaggedString(e.message));
		}
	}
	render(): React.ReactNode {
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
