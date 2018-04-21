var path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
        path: __dirname + '/public',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader'
			}
		}]
	},
	resolve: {
		modules: [
			path.resolve(__dirname, "src"),
			"node_modules"
		]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/public/index.html';
				}
			}
		}
	},
	externals: {
		'firebase': 'firebase'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
};
