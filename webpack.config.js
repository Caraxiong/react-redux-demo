var path = require('path')
var webpack = require('webpack')

module.exports = {
	//??
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./index'
	],
	output: {
		//??
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js|jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				include: __dirname,
				options: {
					presets : [
					    "react",
					    "es2015"
				  	]
				}
			}
		]
	}
}