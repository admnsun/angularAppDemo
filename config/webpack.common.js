var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'app': './app/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    preLoaders: [
      {
          test: /\.ts$/,
          loader: "tslint"
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: helpers.root('assets'),
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      }
    ]
  },
  tslint: {
    configuration: {
        // rules: {
        //     quotemark: [true, "double"]
        // }
    },

    // tslint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,

    // tslint does not interrupt the compilation by default
    // if you want any file with tslint errors to fail
    // set failOnHint to true
    failOnHint: true,

    // name of your formatter (optional)
    //formatter: "yourformatter",

    // path to directory containing formatter (optional)
    //formattersDirectory: "node_modules/tslint-loader/formatters/",

    // These options are useful if you want to save output to files
    // for your continuous integration server
    // fileOutput: {
    //     // The directory where each file's report is saved
    //     dir: "./foo/",

    //     // The extension to use for each report's filename. Defaults to "txt"
    //     ext: "xml",

    //     // If true, all files are removed from the report directory at the beginning of run
    //     clean: true,

    //     // A string to include at the top of every report file.
    //     // Useful for some report formats.
    //     header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",

    //     // A string to include at the bottom of every report file.
    //     // Useful for some report formats.
    //     footer: "</checkstyle>"
    // }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};