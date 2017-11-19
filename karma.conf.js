/****************************************************************************************
 * Karma configuration file
 ***************************************************************************************/

module.exports = function (config) {
    config.set({
        basePath:'',
        files:[
            'karma.entry.js',
        ],

        /**
         * Enable / disable watching file and executing tests whenever any file changes
         */
        autoWatch: true,

        /**
         * Here, we tell Karma we'll be using Jasmine
         */
        frameworks:['jasmine'],

        /**
         * Level of logging
         * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_INFO,

        /**
         * Currently we have the following launchers: Firefox, Chrome, PhantomJS
         * Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: ['Firefox', 'PhantomJS'],

        /**
         * Tells PhantomJS to shut down if Karma throws a ResourceError, If we didn't, PhantomJS might not shut down,
         * and this would eat away at our system resources.
         */
        phantomJsLauncher: {
            exitOnResourceError: true
        },

        /**
         * We tell Karma to run a list of preprocessors on our karma.entry.js file
         */
        preprocessors: {
            'karma.entry.js': ['webpack', 'sourcemap']
        },


        /**
         *  dots: Tells karma to use dots reporter, which outputs a single dot for each test instead of descriptive message.
         *  kjhtml - Karma Jasmine HTML Reporter. Reporter that dynamically shows tests results at debug.html page.
         */
        reporters: ['dots', 'kjhtml'],

        /**
         * leave Jasmine Spec Runner output visible in browser
         */
        client: {
            clearContext: false
        },

        /**
         * Keeps karma running after it completed it's tests for later rerun.
         */
        singleRun: false,

        failOnEmptyTestSuite:false,

        /**
         * Load webpack test configuration file
         */
        webpack: require('./webpack/webpack.test.js'),

        webpackMiddleware: {
          noInfo: true
        },

        /**
         * Hide webpack bundle information messages
         */
        webpackServer: {
            noInfo: true
        }
    })
};

