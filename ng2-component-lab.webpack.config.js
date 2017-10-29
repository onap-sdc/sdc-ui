const path = require('path');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const baseHref = process.env.NODE_ENV === 'build' ? '<base href="/angular/">' : '<base href="">';

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
            {test: /\.html$/, loader: "html-loader"},
            {
                test: /.scss$/,
                use: [
                    'style-loader',
                    'css-loader?root=' + path.resolve(__dirname, 'assets'),
                    'sass-loader'
                ],
                include: path.resolve(__dirname, '../')
            },
            {
                test: /\.(svg|eot|ttf|woff2?)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    fallback: 'file-loader'
                }
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')]
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
