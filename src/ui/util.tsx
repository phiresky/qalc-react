export function getAppDiv(): HTMLDivElement {
	const div = document.createElement("div");
	div.classList.add("app");
	document.body.appendChild(div);
	return div;
}

export function addBootstrapCss(): void {
	const link = document.createElement("link");

	link.type = "text/css";
	link.rel = "stylesheet";
	link.href =
		"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

	document.head.appendChild(link);
}
