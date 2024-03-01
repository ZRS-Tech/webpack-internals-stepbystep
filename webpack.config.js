const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = {
	DIST: path.resolve(__dirname, "dist"),
	SRC: path.resolve(__dirname, "src"),
	JS: path.resolve(__dirname, "src/js/"),
};
// Webpack configuration
module.exports = {
	mode: "development",
	entry: path.join(paths.JS, "index.js"),
	output: {
		path: paths.DIST,
		filename: "app.bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.SRC, "index.html"),
		}),
	],
	// Loader configurations
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: ["file-loader"],
			},
		],
	},
	// Enable importing JS files withut specifying their's extension
	resolve: {
		extensions: [".js", ".jsx"],
	},
};
