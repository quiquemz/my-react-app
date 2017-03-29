'use strict';

var config = (process.env.NODE_ENV !== 'production') ? require('../webpack.config') : require('../webpack.prod.config');
var express = require('express');
var open = require('open');
var path = require('path');
var webpack = require('webpack');

/* eslint-disable no-console */

var port = process.env.PORT || 8080;
var app = express();
var compiler = webpack(config);

if (process.env.NODE_ENV !== 'production') {
    app.use(require('webpack-hot-middleware')(compiler));
}

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else if (process.env.NODE_ENV !== 'production') {
        console.log(__dirname);
        open('http://localhost:' + port);
    } else {
        console.info("==> 🌎 Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
    }
});
