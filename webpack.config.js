const path = require('path');
const webpack = require('webpack');
const Copy = require('copy-webpack-plugin');

const production = process.env.NODE_ENV == "production";
const plugins = [
	new webpack.DefinePlugin({
	}),
	new Copy([{ from: '*.html', to: "." }])
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
		categorizeHelper: "./src/GnuUnitsCategorizeHelper"
	},
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, "bin"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{
				test: /\.tsx?$/, loaders: ['babel-loader?plugins[]=transform-es2015-for-of', 'ts-loader']
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
		],
	},
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"],
	},
	plugins
};