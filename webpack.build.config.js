var path = require('path');

var webpackConfig = {

    devtool: 'source-map',

    entry: {},

    output: {
        publicPath: ''
    },

    plugins: [
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
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../')
            },
            {
                test: /\.json$/,
                loader: 'json',
                include: path.resolve(__dirname, '../')

            },
            {
                test: /\.svg$/,
                use: 'svg-sprite-loader',
                options: {
                    extract: true,

                }
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            root: path.resolve(__dirname),
            app: path.resolve(__dirname, 'src')
        }
    }
};

module.exports = webpackConfig;
