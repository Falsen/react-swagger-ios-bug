const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, './main.js'),
	mode: 'production', // change to development and it works
	devtool: 'source-map',
	optimization: {
		minimizer: [
			new TerserPlugin({
				minify: TerserPlugin.uglifyJsMinify, // comment out and it will work
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
			}
		],
	},

	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'panel.[name].js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public')
		},
		port: 9000
	}
};
