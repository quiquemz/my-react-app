var express = require('express');
var config = (process.env.NODE_ENV !== 'production') ? require('./webpack.config') : require('./webpack.prod.config');
var open = require('open');
var path = require('path');
var webpack = require('webpack');
var app = express();
var compiler = webpack(config);

app.set('port', (process.env.PORT || 5000));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
