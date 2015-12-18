'use strict';

var express  = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

var development = process.env.NODE_ENV !== 'production';
var port = development ? 3000 : process.env.PORT;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

if(development) {
  require('./webpackDevServer')();

  app.all('/build/*', function(req, res) {
    proxy.web(req, res, { target: 'http://localhost:8080' });
  });
}

proxy.on('error', function(err) {
  console.log('Could not connect to webpack dev server', err);
});

function serveStaticAsset(req, res) {
  var asset = require('./staticAssets/' + req.url + '.json');
  res.setHeader('Content-Type', 'application/json');
  res.json(asset);
}

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
