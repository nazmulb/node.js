var http = require('http');
http.Agent.defaultMaxSockets = 10;

var options = {
	host: "www.google.com.bd",
	port: 80,
	path: "/",
	method: "GET",
	agent: false
};

function handleResponseCallback(res) {
	console.log('got response:' + res);
}

var req = http.request(options, handleResponseCallback);
/*
req.on('socket', function(socket) {
	socket.emit('agentRemove');
});*/