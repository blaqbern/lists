'use strict';

var path = require('path');
var cssnext = require('postcss-cssnext');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

var development = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loaders: ['eslint'] }
    ],
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style', 'css', 'postcss'], exclude: /node_modules/ }
    ]
  },
  eslint: {
    configFile: '.eslintrc.js'
  },
  postcss: function() {
    return [cssnext];
  },
  cssnext: {
    browsers: 'last 2 versions'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
