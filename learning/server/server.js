var http = require("http");
var host = "localhost";
var port = 8082;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello Nazmul");
    res.end();
}).listen(port);

console.log("Server is running on "+host+":"+port);