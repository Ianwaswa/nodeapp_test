var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Ian Juma" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/BallonDor', function (req, res) {
    res.send('{ "response": "Vinicius Robbed Haha" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
