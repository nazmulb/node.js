var express = require("express");
var app = express();

var myLogger = function(req, res, next){
	console.log('LOGGED');
	next();
}

var requestTime = function (req, res, next) {
	console.log('TIMELOGGED');
	req.requestTime = Date.now();
	next();
}

var meth = function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
}

app.use(requestTime);
app.use(myLogger);
app.use('/user/:id', meth);

app.use('/doc/:id', function (req, res, next) {
	console.log('Request URL:', req.originalUrl);
	next();
}, function (req, res, next) {
	console.log('Request Type:', req.method);
	next();
});

app.get('/profile/:id', function (req, res, next) {
	res.send('Profile');
});

app.get('/', function(req, res){
	console.log('Home Page');
	var responseText = 'This is my home page!<br />'
	responseText += '<small>Requested at: ' + req.requestTime + '</small>'
	res.send(responseText)
});

app.get('/about', function(req, res){
	console.log('About Page');
	res.send('This is about myself');
});

app.get('/user/:id', function(req, res){
	console.log('User Page');
	res.send('User ID: '+ req.params.id);
});

app.get('/doc/:id', function(req, res){
	console.log('Doc Page');
	res.send('Doc ID: '+ req.params.id);
});

app.listen(8081);