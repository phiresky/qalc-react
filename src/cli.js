require("ts-node/register");
const { qalculate, init } = require("./libqalc");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
console.log("Unit Calculator");

function prompt() {
	process.stdout.write("\n> ");
}
rl.on("line", async line => {
	try {
		var { input, output } = await qalculate(line);
	} catch (e) {
		output = e;
	}
	console.log(output.toString());
	prompt();
});

prompt();
init();
