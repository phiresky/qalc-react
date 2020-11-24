const path = require("path");
const Html = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const production = process.env.NODE_ENV == "production";
console.warn("building " + (production ? "prod" : "dev"));
const htmlCfg = {
	// webpage title
	title: "Qalc",
	// set width=device-width header for mobile devices
	mobile: true,
	scripts: [],
	chunks: ["gui"],
	links: [],
};
const plugins = [
	new CopyPlugin({ patterns: [{ from: "pwa", to: "." }] }),
	new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
	new Html({
		...htmlCfg,
		templateContent: `
<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8">
	<title>Qalc</title>
	<link rel="manifest" href="manifest.webmanifest">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	<body>
	</body>
</html>
`,
	}),
	new Html({
		...htmlCfg,
		chunks: ["GnuUnitsCategorizeHelper"],
		filename: "GnuUnitsCategorizeHelper.html",
	}),
	new Html({
		...htmlCfg,
		chunks: ["ShowGnuUnitsTree"],
		filename: "ShowGnuUnitsTree.html",
	}),
	new WorkboxPlugin.GenerateSW({
		// these options encourage the ServiceWorkers to get in there fast
		// and not allow any straggling "old" SWs to hang around
		clientsClaim: true,
		skipWaiting: true,
		maximumFileSizeToCacheInBytes: 10e6,
		additionalManifestEntries: [
			{
				url: "index.html",
				revision: Math.random().toString(), // todo: smarter
			},
		],
		excludeChunks: ["ShowGnuUnitsTree", "GnuUnitsCategorizeHelper"],
	}),
];
module.exports = {
	mode: production ? "production" : "development",
	entry: {
		gui: "./src/ui/gui",
		GnuUnitsCategorizeHelper: [
			"./src/units-importer/GnuUnitsCategorizeHelperMain",
		],
		ShowGnuUnitsTree: ["./src/units-importer/ShowGnuUnitsTree"],
	},
	devtool: production ? "source-map" : "eval-cheap-module-source-map",
	output: {
		path: path.join(__dirname, "bin"),
		filename: "[name].[contenthash].js",
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
