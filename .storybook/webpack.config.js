
const path = require('path');
const webpack = require('webpack');
const svgFolder = './assets/icons/';
const fs = require('fs');

let iconNames = [];

fs.readdirSync(svgFolder).forEach(file => {
	let fileName = file.split('.');
	if (fileName[0] && fileName[1] === 'svg') {
		iconNames.push(fileName[0]);
	}
});

module.exports = {
	module: {
		rules: [
			{
				test: /.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				include: path.resolve(__dirname, '../')
			},
			{
				test: /.html$/,
				loader: 'html-loader',
				options: {
					minimize: false
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'ICON_PATH': '"./"',
			'ICON_NAMES':JSON.stringify(iconNames)
		})
	]
};
