import "rc-tooltip/assets/bootstrap_white.css";
import * as React from "react";
import { render } from "react-dom";
import "../../style.scss";
import { qalculate, qalculationHasSideeffect } from "../libqalc";
import { GUI } from "./components/GUI";

window.addEventListener("load", () => {
	if (!navigator.serviceWorker) {
		console.log("service worker api not available");
		return;
	}
	navigator.serviceWorker
		.register("service-worker.js")
		.then((registration) => {
			console.log("SW registered: ", registration);
		})
		.catch((registrationError) => {
			console.log("SW registration failed: ", registrationError);
		});
});
const div = document.createElement("div");
div.classList.add("app");
document.body.appendChild(div);
const gui = render(<GUI />, div);

Object.assign(window, { gui, qalculationHasSideeffect, qalculate });
