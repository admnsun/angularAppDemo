// Karma configuration
// Generated on Fri Aug 12 2016 15:20:53 GMT-0400 (Eastern Daylight Time)
var webpackConfig = require('./config/webpack.test.js');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
     plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-coverage',
      'karma-htmlfile-reporter',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-ie-launcher'
    ],

    // list of files / patterns to load in the browser
    files: [
      {pattern: './config/spec-bundle.js', watched: false}
    ],


    // list of files to exclude
    exclude: [
    ],
    webpack: webpackConfig,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
       './config/spec-bundle.js':['webpack','sourcemap'],
      '../**/*.js':['sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html', 'coverage'],
    htmlReporter:{

      outputFile: './coverage/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },
    coverageReporter:{
        reporters: [
            {type: 'lcov', dir: './coverage/', subdir: '.'},
            {type: 'json', dir: './coverage/', subdir: '.'},
            {type: 'text-summary'},
        ]
    },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
