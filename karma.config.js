// Karma configuration
// Generated on Mon Jul 11 2016 14:43:55 GMT-0400 (Eastern Daylight Time)
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
      'karma-chrome-launcher'
    ],


    // list of files / patterns to load in the browser
    files: [
      // Paths loaded by Karma
     // {pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
     // {pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true },
     // {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},
     // {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
     // {pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: true},
     // {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true},
     // {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
     // {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
     // {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
     // {pattern: 'karma-test-shim.js', included: true, watched: true},

      // Paths loaded via module imports
     // {pattern: 'dist/app/**/*.js', included: false, watched: true},

      // Paths to support debugging with source maps in dev tools
     // {pattern: 'app/**/*.ts', included: false, watched: true},
   //   {pattern: 'dist/app/**/*.js.map', included: false, watched: false}
       {pattern: './config/spec-bundle.js', watched: false}
    ],

    // Proxied base paths
   // proxies: {
      // Required for component assests fetched by Angular's compiler
   //   '/app/': '/base/app/'
     // '/dist/': '/base/dist/app/'
  //  },

    // list of files to exclude
    exclude: [

    ],
webpack: webpackConfig,

  //  webpackMiddleware: {
   //   noInfo: true
   // },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
     
      './config/spec-bundle.js':['coverage','webpack','sourcemap']
        // 'dist/app/**/!(*spec).js': ['coverage']
      // '**/app/**/!(*.spec).js': 'coverage'
      // '**/base/dist/app/(?!.*\.spec\.js$).*.js' : 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html', 'coverage'],
    htmlReporter:{
       // reporters: [
       //     {type: 'lcov', dir: 'coverage/', subdir: '.'},
      //      {type: 'json', dir: 'coverage/', subdir: '.'},
      //      {type: 'text-summary'},
      //  ]
      outputFile: 'coverage/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },
    coverageReporter:{
        reporters: [
            {type: 'lcov', dir: 'coverage/', subdir: '.'},
            {type: 'json', dir: 'coverage/', subdir: '.'},
            {type: 'text-summary'},
        ]
    },
 
 webpackServer: { noInfo: true },
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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}