var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('seville');
});
app.get('/canary', function(req, res) {
    res.render('canary');
});
app.get('/verde', function(req, res) {
    res.render('verde');
});
app.get('/som', function(req, res) {
    res.render('som');
});
app.get('/guam', function(req, res) {
    res.render('guam');
});
app.get('/death', function(req, res) {
    res.render('death');
});

var server = app.listen(7482, function() {
    console.log('Express server listening on port ' + server.address().port);
});