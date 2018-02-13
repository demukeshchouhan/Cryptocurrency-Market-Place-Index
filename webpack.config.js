const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [
	"axios", "lodash", "react", "react-dom","react-redux",
	"react-router-dom","redux","redux-thunk"
];

module.exports = {
	entry : {
		bundle : "./src/index.js",
		vendor : VENDOR_LIBS

	},
	output : {
		path : path.resolve(__dirname, "public"),
		filename : "[name].[chunkhash].js",
		publicPath : "/"
	},
	module : {
		rules : [
			{
				use : "babel-loader",
				exclude : /node_modules/,
				test : /\.js$/
			},
			{
				test : /\.scss$/,
				use : ExtractTextPlugin.extract({
					fallback : "style-loader",
					use : ["css-loader", "sass-loader"]
				})
			}
		]
	},
	devtool : "source-map",
	devServer: {
		contentBase : path.resolve(__dirname, "public"),
		historyApiFallback: true,
        compress: true
	},
	plugins : [
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			template : "src/index.html"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names : ["vendor", "manifest"]
		})
	],
	resolve : {
        extensions : [".js", ".jsx", ".scss"]
    }
}