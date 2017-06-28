var path = require('path');

// const svgFolder = './assets/icons/';
// const fs = require('fs');
// let svgIcons = []
// fs.readdirSync(svgFolder).forEach(file => {
// 	let fileName = file.split('.');
// 	if (fileName[0] && fileName[1] === 'svg') {
// 		svgIcons.push(fileName[0]);
// 	}
// })

var webpackConfig = {

  devtool: 'source-map',

  plugins: [
    // new webpack.DefinePlugin({
    // 	'ICON_PATH': '"./"',
    // 	'ICON_NAMES':JSON.stringify(svgIcons)
    // })
  ],

  module: {
    rules: [
      // .ts files for TypeScript
      {
        test: /.ts$/,
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      },
    ]
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'node_modules') ]
  },

  node: {
    global: true,
    crypto: 'empty',
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }
};

module.exports = webpackConfig;
