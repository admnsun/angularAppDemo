var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
 // resolve: {
 //   extensions: ['', '.ts', '.js'],
 //   root: helpers.root('app'),
 // },
  module: {
    postLoaders: [
     {
        test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  },

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
  ],
  // node: {
  //   global: 'window',
  //   process: false,
  //   crypto: 'empty',
  //   module: false,
  //   clearImmediate: false,
  //   setImmediate: false
  // }

});