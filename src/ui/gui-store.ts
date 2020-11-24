import lzString from "lz-string";
import {
	action,
	computed,
	makeObservable,
	observable,
	runInAction,
} from "mobx";
import {
	parseEvaluate,
	qalculate,
	qalculationHasSideeffect,
	QalculationResult,
} from "../libqalc";
import scope from "../libqalc/globalScope";
import { tokenize } from "../libqalc/parser";
import * as TokenType from "../libqalc/TokenType";
import { TaggedString } from "../unitNumber/output";

type Serialized = {
	lines: string[];
};
export class GuiLineElement {
	public id: number;
	private static idCounter = 0;
	constructor(public data: QalculationResult) {
		this.id = GuiLineElement.idCounter++;
	}
}
export class GuiState {
	lines: GuiLineElement[] = [];
	currentInput = "";
	currentOutput = new TaggedString();

	constructor() {
		makeObservable(this, {
			lines: observable,
			currentInput: observable,
			currentOutput: observable,
			addLine: action,
			removeLine: action,
		});
	}

	addLine(line: GuiLineElement): void {
		this.lines.unshift(line);
	}
	removeLine(index: number): void {
		this.lines.splice(index, 1);
		setTimeout(() => this.exportToHistory(), 1000);
	}

	submit(): void {
		const input = this.currentInput;
		if (input.trim().length > 0)
			qalculate(input)
				.then((data) => this.addLine(new GuiLineElement(data)))
				.catch((reason) => {
					console.error("could not qalc", input, reason);
					this.addLine(
						new GuiLineElement({
							input: TaggedString.t`${input}`,
							output: new TaggedString(`${reason}`),
							type: "error",
						}),
					);
				});
		this.currentInput = "";
		this.currentOutput = new TaggedString();
	}
	async loadPresets(presets: string[]): Promise<void> {
		const lines = await Promise.all(
			presets.map((input) =>
				qalculate(input)
					.then((data) => new GuiLineElement(data))
					.catch(
						(error) =>
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
	async setInput(input: string): Promise<void> {
		this.currentInput = input;
		if (await qalculationHasSideeffect(input)) {
			runInAction(() => {
				this.currentOutput = new TaggedString("press enter to execute");
			});
		} else {
			const res = await this.calcToString(input);
			runInAction(() => {
				this.currentOutput = res;
			});
		}
	}
	async calcToString(input: string): Promise<TaggedString> {
		return qalculate(input)
			.then(({ output }) => output)
			.catch((reason) => new TaggedString("" + reason));
	}

	exportToUrl(): void {
		history.replaceState(
			{},
			"",
			"#" +
				new URLSearchParams({
					state: lzString.compressToEncodedURIComponent(
						this.serialize(),
					),
				}).toString(),
		);
	}
	serialize(): string {
		return JSON.stringify({
			lines: this.lines
				.map((line) => line.data.input.toString())
				.reverse(),
		} as Serialized);
	}
	exportToHistory(): void {
		localStorage.setItem(
			"qalc-history",
			lzString.compressToUTF16(this.serialize()),
		);
	}
	clearHistory(): void {
		localStorage.clear();
		location.reload();
	}
}

export class UnitCompleter {
	constructor(public target: GuiState) {
		makeObservable(this, {
			cursorIndexChars: observable,
			tokens: computed,
		});
	}
	cursorIndexChars: number | null = null;
	get tokens() {
		const tokens = [...tokenize(this.target.currentInput)];
		if (!this.cursorIndexChars) return { tokens, cursorIndex: null };
		const cursorIndex = tokens.findIndex(
			(t) =>
				t.type !== TokenType.Whitespace &&
				t.start + t.str.length >= this.cursorIndexChars!,
		);
		return {
			tokens,
			cursorIndex: cursorIndex !== null ? cursorIndex : null,
		};
	}
	replaceCurrent = (u: string) => {
		const { tokens } = this.tokens;
		let { cursorIndex } = this.tokens;
		if (cursorIndex !== null) {
			const before = tokens[cursorIndex];
			if (before.str === "to ") cursorIndex++;
			tokens[cursorIndex] = {
				str: u,
				type: TokenType.Identifier,
				start: 0,
			};
		}
		this.target.currentInput = tokens.map((x) => x.str).join("");
	};
	getPossibleUnits(): string[] {
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
							.map((x) => x.str)
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
