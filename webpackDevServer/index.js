'use strict';

var webpack = require('webpack');
var config = require('../webpack.config');
var webpackDevServer = require('webpack-dev-server');

module.exports = function() {
  var bundleStart;
  var compiler = webpack(config);
  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + ' ms!');
  });

  new webpackDevServer(compiler, {
    publicPath: '/build/',
    hot: true,
    stats: {
      colors: true
    }
  })
  .listen(8080, 'localhost', function() {
    console.log('Webpack dev server listening on port 8080');
  });
}
