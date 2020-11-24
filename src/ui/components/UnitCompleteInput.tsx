import { makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { UnitCompleter } from "../gui-store";

@observer
export class UnitCompleteInput extends React.Component<{
	completer: UnitCompleter;
}> {
	focused = false;
	inpRef = React.createRef<HTMLInputElement>();

	onSelect: React.ReactEventHandler<HTMLInputElement> = (e) => (
		(this.focused = true),
		(this.props.completer.cursorIndexChars = e.currentTarget.selectionStart)
	);

	constructor(props: { completer: UnitCompleter }) {
		super(props);

		makeObservable(this, {
			focused: observable,
			inpRef: observable,
		});
	}

	render() {
		const poss = this.focused
			? this.props.completer.getPossibleUnits()
			: [];
		return (
			<div className="unit-complete-input inline-query">
				<span className="prompt">{">"} </span>
				<input
					value={this.props.completer.target.currentInput}
					onChange={(e) =>
						this.props.completer.target.setInput(
							e.currentTarget.value,
						)
					}
					onSelect={this.onSelect}
					onBlur={() => setTimeout(() => (this.focused = false), 500)}
					onFocus={this.onSelect}
					ref={this.inpRef}
					size={this.props.completer.target.currentInput.length}
					autoCorrect={"off"}
					autoComplete={"off"}
					autoCapitalize={"none"}
					placeholder="enter formula"
				/>
				{poss.length > 0 ? (
					<ul className="dropdown-menu">
						{poss.map((unit) => (
							<li key={unit}>
								<a
									href="#"
									onClick={() =>
										this.props.completer.replaceCurrent(
											unit,
										)
									}
								>
									{unit}
								</a>
							</li>
						))}
					</ul>
				) : (
					""
				)}
			</div>
		);
	}
}
