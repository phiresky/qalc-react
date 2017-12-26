const path = require('path');
const webpack = require('webpack');
const Copy = require('copy-webpack-plugin');
const Html = require("html-webpack-plugin");
const Template = require("html-webpack-template");

const production = process.env.NODE_ENV == "production";
const plugins = [
	new webpack.DefinePlugin({
	}),
	new Html({
		inject: false,
		// use more flexible html-webpack-template
		// see https://github.com/jaketrent/html-webpack-template#basic-usage for more options
		template: Template,
		// add a div with this id in which we will mount our root react component
		appMountId: "app",
		// webpage title
		title: "Stats",
		// set width=device-width header for mobile devices
		mobile: true,
		scripts: [],
		// remove additional newlines from the template
		// (https://github.com/jaketrent/html-webpack-template/issues/40)
		minify: {
			collapseWhitespace: true,
			preserveLineBreaks: true
		}
	}),
];
if (production) {
	plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
	plugins.push(new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': `"production"`
		}
	}));
}
module.exports = {
	entry: {
		gui: "./src/gui",
		categorizeHelper: ["./src/GnuUnitsCategorizeHelperMain"]
	},
	devtool: 'cheap-module-eval-source-map',
	output: {
		path: path.join(__dirname, "bin"),
		filename: "[name].[hash].js"
	},
	node: {
		fs: "empty"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: [
						[
							"env",
							{
								targets: {
									browsers: "> 1%, last 2 versions"
								},
								modules: false
							}
						],
						"react"
					],

				}
			},
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{
				test: /\.tsx?$/, loaders: ['ts-loader']
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /\.(txt|units)$/, loader: 'raw-loader'}
		],
	},
	resolve: {
		modules: ["node_modules"],

		extensions: [".webpack.js", ".web.js", ".tsx", ".ts", ".jsx", ".js"]
	},
	plugins
};