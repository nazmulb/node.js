var express = require("express");
var app = express();

app.get('/user/:id', function (req, res, next) {
	console.log('ID:', req.params.id)
	next()
}, function (req, res, next) {
	console.log('Sub Stack')
	res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
	console.log('Second')
	res.end(req.params.id)
})

app.listen(8081);