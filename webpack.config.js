
const webpack = require('webpack');
const path = require('path')

const fs = require('fs');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
	entry: path.resolve(__dirname, './main.js'),
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		minimizer: [
			new TerserPlugin({
				minify: TerserPlugin.uglifyJsMinify,
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {

					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react'],
						plugins: [
							'@babel/plugin-syntax-jsx',
						]
					}


				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				include: /node_modules\/libportal/,
			},
			{
				test: /\.html$/i,
				type: "asset/resource",
			}
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			react: path.resolve('./node_modules/react'),
			"react-dom": path.resolve('./node_modules/react-dom'),
			"react-router": path.resolve('./node_modules/react-router')
		}
	},

	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'panel.[name].js',
	}
};
