/****************************************************************************************
 * Karma entry file.
 * Starting point for pulling in our test and application files when using karma.
 ***************************************************************************************/

/**
 * Load dependencies:
 * - core-js/es6 - Javascript polyfills support es6 code on unsupported browsers
 * - reflect-metadata - support for decorators and reflection.
 * - Zone library - Monkey patch all asynchronous actions and jasmine so changes could be detected
 *                  as well as long stack traces (To get the root cause of errors).
 */

require('core-js/es6');

require('reflect-metadata');

require('zone.js/dist/zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/long-stack-trace-zone'); // Gives us a long backward trace of actions and errors
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');

/**
 * RxJS
 */
require('rxjs/Rx');


/**
 * Angular testing libraries dependencies
 */
const browserTesting = require('@angular/platform-browser-dynamic/testing');
const coreTesting = require('@angular/core/testing');

coreTesting.TestBed.initTestEnvironment(
    browserTesting.BrowserDynamicTestingModule,
    browserTesting.platformBrowserDynamicTesting()
);

/**
 * Webpack method. requires all the files and subdirectories of a pattern.
 * Checkout {@link https://webpack.github.io/docs/context.html}
 */
const context = require.context('./src/angular/', true, /\.spec\.ts$/);

/**
 * Get all the files, for each file, call the context function
 * that will require the file and load it up here. Context will
 * loop and require those spec files here
 */
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(context);

/**
 * These lines are the Jasmine setup . We'll make sure that we get full stack traces when we have a
 * problem and that Jasmine uses two seconds as its default timeout.
 * The timeout is used when we test asynchronous processes. If we don't set this properly, some of our tests could hang forever.
 */
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
