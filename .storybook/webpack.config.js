
const path = require('path');
const webpack = require('webpack');
const svgFolder = './assests/icons/';
const fs = require('fs');

let svgIcons = [];

fs.readdirSync(svgFolder).forEach(file => {
	let fileName = file.split('.');
	if (fileName[0] && fileName[1] === 'svg') {
		svgIcons.push(fileName[0]);
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
				query: {
					minimize: false
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'ICON_PATH': '"./"',
			'ICON_NAMES':JSON.stringify(svgIcons)
		})
	]
};
