const path = require("path");
const Html = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const production = process.env.NODE_ENV == "production";
console.warn("building " + (production ? "prod" : "dev"));
const htmlCfg = {
	// add a div with this id in which we will mount our root react component
	appMountId: "app",
	// webpage title
	title: "Qalc",
	// set width=device-width header for mobile devices
	mobile: true,
	scripts: [],
	chunks: ["gui"],
	links: [],
};
const plugins = [
	new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
	new Html({
		...htmlCfg,
	}),
	new Html({
		...htmlCfg,
		chunks: ["categorizeHelper"],
		filename: "GnuUnitsCategorizeHelper.html",
		links: [
			"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
		],
	}),
	new Html({
		...htmlCfg,
		chunks: ["gnuTest"],
		filename: "gnuTest.html",
		links: [
			"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
		],
	}),
];
module.exports = {
	mode: production ? "production" : "development",
	entry: {
		gui: "./src/ui/gui",
		categorizeHelper: ["./src/units-importer/GnuUnitsCategorizeHelperMain"],
		gnuTest: ["./src/units-importer/rewrite-gnu-units"],
	},
	devtool: production ? "source-map" : "eval-cheap-module-source-map",
	output: {
		path: path.join(__dirname, "bin"),
		filename: "[name].[hash].js",
	},
	optimization: {
		minimize: false,
	},
	node: false,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					transpileOnly: true,
					compilerOptions: {
						module: "esnext",
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					"css-loader",
				],
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{ test: /\.(txt|units)$/, loader: "raw-loader" },
		],
	},
	resolve: {
		modules: ["node_modules"],

		extensions: [".webpack.js", ".web.js", ".tsx", ".ts", ".jsx", ".js"],
	},
	plugins,
};
