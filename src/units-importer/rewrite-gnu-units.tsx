import CategorizeStore, {
	Type,
	Box,
	Category,
	CatChild,
	splitOnce,
} from "./CategorizeStore";
import gnuDefs from "../../units-2.12/definitions.units";
import steps from "../../data/gnu-units-categorize-steps.json";
import { render } from "react-dom";
import * as React from "react";
import "../../style.scss";
import { observer } from "mobx-react";
import { observable, makeObservable } from "mobx";

function FullInfo({ store, box }: { store: CategorizeStore; box: Box }) {
	const info = store.categoryTreeOf(box.start);
	return (
		<div>
			<p>Fully parsed info:</p>
			<pre>
				<p>{info.comment}</p>
				<b>Category:</b>{" "}
				{info.headings.map((x) => `${x}`).join("\n -> ")}
			</pre>
		</div>
	);
}
function ContentTable({ x }: { x: string }) {
	const lines = x.split("\n").map((x) => splitOnce(/\s/, x, true));
	return (
		<table>
			<tbody>
				{lines.map((l, i) => (
					<tr key={i}>
						<td>{l[0]}</td>
						<td>=</td>
						<td>{l[1]}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

const RenderBox = observer(
	class RenderBox extends React.Component<{
		store: CategorizeStore;
		box: Box;
	}> {
		extended = false;
		toggle = () => (this.extended = !this.extended);

		constructor(props: { store: CategorizeStore; box: Box }) {
			super(props);

			makeObservable(this, {
				extended: observable,
			});
		}

		render() {
			const { store, box } = this.props;

			switch (box.type) {
				case Type.Deleted: {
					const text = store.getUncommentedText(box);
					if (text.length === 0) return null;
					return <p className="deleted-box">{text}</p>;
				}
				case Type.Normal: {
					const { content, comment } = store.getBoxContent(box);
					return (
						<>
							<div
								className="well well-sm normal-box clickable"
								onClick={this.toggle}
							>
								<div className="content">
									<ContentTable x={content} />
								</div>
								{comment && (
									<div
										className="comment alert alert-info"
										style={{ float: "left" }}
									>
										{comment}
									</div>
								)}
								<div style={{ clear: "both" }} />
								{this.extended && (
									<FullInfo store={store} box={box} />
								)}
							</div>
							<br />
						</>
					);
				}
				case Type.Heading: {
					const {
						headingsIndex,
						headingLevel,
					} = store.categoryTreeOf(box.start);
					const H: "h1" = ("h" + headingLevel) as any;
					return (
						<H className="heading-box">
							{headingsIndex.join(".")}.{" "}
							{store.getUncommentedText(box)}
						</H>
					);
				}
			}
		}
	},
);

class Tocs extends React.Component<{
	store: CategorizeStore;
	cats: CatChild[];
}> {
	render(): JSX.Element {
		const { cats, store } = this.props;
		return (
			<ul className="table-of-contents">
				{cats.map((cat, i) => (
					<li key={i}>
						<E store={store} ele={cat} />
					</li>
				))}
			</ul>
		);
	}
}

function E(p: { store: CategorizeStore; ele: CatChild }) {
	return p.ele.type === "category" ? (
		<Toc cat={p.ele.category} store={p.store} />
	) : (
		<RenderBox box={p.ele.box} store={p.store} />
	);
}

const Toc = observer(
	class Toc extends React.Component<{
		cat: Category;
		store: CategorizeStore;
	}> {
		expanded = this.props.cat.path.length < 2;
		toggle = () => (this.expanded = !this.expanded);

		constructor(props: { cat: Category; store: CategorizeStore }) {
			super(props);

			makeObservable(this, {
				expanded: observable,
			});
		}

		render(): JSX.Element {
			const { cat, store } = this.props;
			const chr = this.expanded ? "▼" : "▶";
			const expandable = cat.path.length >= 1 && cat.children.length > 0;
			return (
				<>
					<p className="toc-line">
						{expandable ? (
							<span className="clickable" onClick={this.toggle}>
								{chr}
							</span>
						) : (
							""
						)}{" "}
						<b>{cat.path.map((x) => x + 1).join(".")}.</b>{" "}
						{cat.name}
					</p>
					{this.expanded && (
						<Tocs store={store} cats={cat.children} />
					)}
				</>
			);
		}
	},
);

function All() {
	const store = new CategorizeStore(gnuDefs, steps);
	const toc = store.getTableOfContents();
	console.log(toc);
	return (
		<div className="gnu-rewrite-test container">
			<h1>Contents</h1>
			<Tocs cats={toc} store={store} />
			{/**store.boxes.map(box => <RenderBox store={store} box={box} />)*/}
		</div>
	);
}

render(<All />, document.getElementById("app"));
