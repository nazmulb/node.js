var express = require('express');
var app = express();

var bodyParser = require('body-parser'); // for POST

var cookieParser = require('cookie-parser'),
	session = require('express-session');
	
app.use(cookieParser());
app.use(session({
	secret: 'my secret string',
	resave: false,
	saveUninitialized: true
}));

// Create application/x-www-form-urlencoded parser
// This object will contain key-value pairs, where the value can be a string or array 
//(when extended is false), or any type (when extended is true).
var urlencodedParser = bodyParser.urlencoded({ extended: false }) // for POST

app.use(express.static('../../public'));
app.get('/', function (req, res) {
	req.session.user = "Nabil";
	res.redirect('/index.html');
});

app.get('/index.html', function (req, res) {
	console.log("User: "+req.session.user);
	res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/delete', function (req, res) {
	req.session.destroy();
	res.redirect('/index.html');
});

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

app.post('/process_post',urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

});