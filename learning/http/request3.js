var request = require('request');
var inspect = require('util').inspect;
var fromData = {
	firstName: 'Nazmul',
	lastLame: 'Basher'
};
var options = {
	url: 'http://localhost:4001/print/body',
	form: fromData
	//json: fromData
};

request(options, function(err, res, body) {
	if (err) { throw err; }
	console.log(inspect({
		err: err,
		res: {
			statusCode: res.statusCode,
			headers: res.headers
		},
		body: body
	}))
});