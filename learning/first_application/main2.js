const http = require('http');
var util = require('util');
const port = 8080;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Awesome response from '+req.method+' '+req.url+'\n');
	res.end(util.inspect(req.headers));
})
.listen(port, '127.0.0.1', function (err){
  if (err) {
    console.trace(err);
    return;
  }

  console.log('server is listening on '+port);
});