
const path = require('path');
const webpack = require('webpack');

const testFolder = './assests/icons/';
const fs = require('fs');
let svgIcons = []
fs.readdirSync(testFolder).forEach(file => {
	let fileName = file.split('.');
	if (fileName[0] && fileName[1] === 'svg') {
		svgIcons.push(fileName[0]);
	}    
})

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
			'ICON_PATH': '"./"',
			'ICON_NAMES':JSON.stringify(svgIcons)
		})
	]
};
