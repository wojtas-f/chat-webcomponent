const path = require('path')
const config = require('./webpack.config')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(config, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/templates/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', //3. Inject styles into DOM
					'css-loader', //2.Turns css into js
				], //this works in reverse order
			},
		],
	},
})
