var path = require('path');
var HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
var baseHref = process.env.NODE_ENV === 'build' ? '<base href="/angular/">' : '<base href="">'

var webpackConfig = {

  devtool: 'source-map',

  output: {
    path: path.resolve('.out/angular'),
    publicPath: ''
  },

  plugins: [
    new HtmlReplaceWebpackPlugin([{
      pattern: '<base href="/">',
      replacement: baseHref
    }])
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
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      },
    ]
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      root: path.resolve(__dirname),
      app: path.resolve(__dirname, 'src')
    }
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
