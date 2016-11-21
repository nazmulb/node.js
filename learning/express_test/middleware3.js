var express = require("express");
var app = express();

app.get('/user/:id', function (req, res, next) {
	console.log('ID:', req.params.id)
	// if the user ID is 0, skip to the next route
	if (req.params.id == 0) next('route')
	// otherwise pass the control to the next middleware function in this stack
	else next()
}, function (req, res, next) {
	// render a regular page
	res.send('regular')
})

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
	res.send('special')
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(8081);