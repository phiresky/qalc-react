import scope from "../libqalc/globalScope";
import {
	QalculationResult,
	qalculate,
	qalculationHasSideeffect,
	parseEvaluate,
} from "../libqalc";
import { TaggedString } from "../unitNumber/output";
import { observable, computed } from "mobx";
import { tokenize } from "../libqalc/parser";
import * as TokenType from "../libqalc/TokenType";

export class GuiLineElement {
	public id: number;
	private static idCounter = 0;
	constructor(public data: QalculationResult) {
		this.id = GuiLineElement.idCounter++;
	}
}
export class GuiState {
	@observable
	lines: GuiLineElement[] = [];
	@observable
	currentInput = "";
	@observable
	currentOutput = new TaggedString();
	addLine(line: GuiLineElement) {
		this.lines.unshift(line);
	}
	removeLine(index: number) {
		this.lines.splice(index, 1);
	}
	submit() {
		const input = this.currentInput;
		if (input.trim().length > 0)
			qalculate(input)
				.then(data => this.addLine(new GuiLineElement(data)))
				.catch(reason => {
					console.error("could not qalc", input, reason);
					this.addLine(
						new GuiLineElement({
							input: TaggedString.t`${input}`,
							output: new TaggedString("" + reason),
							type: "error",
						}),
					);
				});
		this.currentInput = "";
		this.currentOutput = new TaggedString();
	}
	async loadPresets(presets: string[]) {
		const lines = await Promise.all(
			presets.map(input =>
				qalculate(input)
					.then(data => new GuiLineElement(data))
					.catch(
						error =>
							new GuiLineElement({
								input: TaggedString.t`${input}`,
								output: new TaggedString("" + error),
								type: "error",
							}),
					),
			),
		);
		for (const line of lines) this.addLine(line);
	}
	async setInput(input: string) {
		this.currentInput = input;
		if (await qalculationHasSideeffect(input))
			this.currentOutput = new TaggedString("press enter to execute");
		else {
			this.currentOutput = await this.calcToString(input);
		}
	}
	async calcToString(input: string) {
		return qalculate(input)
			.then(({ output }) => output)
			.catch(reason => new TaggedString("" + reason));
	}
}

export class UnitCompleter {
	constructor(public target: GuiState) {}
	@observable
	cursorIndexChars: number | null = null;
	@computed get tokens() {
		const tokens = [...tokenize(this.target.currentInput)];
		if (!this.cursorIndexChars) return { tokens, cursorIndex: null };
		const cursorIndex = tokens.findIndex(
			t =>
				t.type !== TokenType.Whitespace &&
				t.start + t.str.length >= this.cursorIndexChars!,
		);
		return {
			tokens,
			cursorIndex: cursorIndex !== null ? cursorIndex : null,
		};
	}
	replaceCurrent = (u: string) => {
		let { tokens, cursorIndex } = this.tokens;
		if (cursorIndex !== null) {
			const before = tokens[cursorIndex];
			if (before.str === "to ") cursorIndex++;
			tokens[cursorIndex] = {
				str: u,
				type: TokenType.Identifier,
				start: 0,
			};
		}
		this.target.currentInput = tokens.map(x => x.str).join("");
	};
	getPossibleUnits() {
		const { tokens, cursorIndex } = this.tokens;
		const cursorToken = cursorIndex !== null ? tokens[cursorIndex] : null;
		const poss: string[] = [];
		if (cursorToken) {
			if (
				cursorIndex === tokens.length - 1 &&
				cursorToken.str === "to "
			) {
				try {
					const evaled = parseEvaluate(
						tokens
							.slice(0, cursorIndex)
							.map(x => x.str)
							.join(""),
					);
					const val = evaled.value;
					for (const name of scope.getAllUnits()) {
						const unit = scope.getUnit(name)!.value;
						if (
							!unit.isSpecial() &&
							unit.dimensions.equals(val.dimensions)
						)
							poss.push(name);
					}
				} catch (e) {
					console.log(e);
				}
			}
			if (cursorToken.type === TokenType.Identifier) {
				const units =
					poss.length > 0 ? poss.splice(0) : scope.getAllUnits();

				for (const unitName of units) {
					if (
						unitName.indexOf(cursorToken.str) >= 0 &&
						unitName !== cursorToken.str
					)
						poss.push(unitName);
					if (poss.length > 30) break;
				}
			}
		}
		return poss;
	}
}
