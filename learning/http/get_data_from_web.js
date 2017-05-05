var http = require('http');
var fs = require('fs');

var options = {
	host: "www.google.com.bd",
	port: 80,
	path: "/"
};

var file = fs.createWriteStream('test2.txt');

http.get(options, function(res) {
	console.log('Got response:' + res.statusCode);
    res.pipe(file);
});