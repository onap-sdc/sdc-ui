
const path = require('path');
const webpack = require('webpack');

module.exports = {
	module: {
		loaders: [
			{
				test: /.scss$/,
				loaders: ['style', 'css', 'sass'],
				include: path.resolve(__dirname, '../')
			},
			{
				test: /.html$/,
				loader: 'html',
				query: {
					minimize: false
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'ICON_PATH': '"./"'
		})
	]
};
