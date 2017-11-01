/****************************************************************************************
 * Webpack test configuration file
 * Using the current configuration we are able to bundle all the files we need for our
 * unit testings.
 ***************************************************************************************/


'use strict';

/**
 * Dependencies:
 * path: node library for resolving full path names
 * webpack: for use in our testings
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    /**
     * Choose a developer tool to enhance debugging. inline-source-map - A SourceMap is added as DataUrl to the JavaScript file.
     */
    devtool: 'inline-source-map',

    /**
     * Set webpack loaders and preloaders for typescript, angular2, SASS and HTML,
     * so that webpack will be able to process and bundle them.
     */
    module: {

        rules: [
            {
                test: /.ts$/,
                exclude: /node_modules/,
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

    /**
     * This section lets Webpack know which types of file extensions it should be loading.
     */
    resolve: {
        extensions: ['.js', '.ts'],
        modules: [
            path.resolve('.', 'src'),
            'node_modules'
        ]
    },
};
