var webpack = require('webpack')
var webpackConfig = require('./webpack/test.js')
// process.env.PHANTOMJS_BIN = './../node_modules/.bin/phantomjs'

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: './../test/javascript/tests.webpack.js', watched: true}
    ],

    // list of files to exclude
    exclude: [
      './../node_modules/'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './../test/javascript/tests.webpack.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: webpackConfig.module
    },

    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html', 'coverage'],
    htmlReporter: {
      outputFile: './../reports/karma_test_results.html',
      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    coverageReporter: {
      dir: '../reports/coverage/karma/',
      subdir: '.'
      // Would output the results into: .'../reports/coverage/'
    },

    webpackMiddleware: {
      noInfo: true // please don't spam the console when running in karma!
    },
    plugins: [
      'karma-sourcemap-loader',
      'karma-htmlfile-reporter',
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-webpack',
      'istanbul-instrumenter-loader'
    ],
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered
      //  (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  })
}
