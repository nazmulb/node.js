var http = require('http');

var url = 'http://localhost:8082';

http.get(url, function(res){
    let data = '';
    
    res.on('data', function(chunk) { 
        data += chunk; 
    });

    res.on('end', function() {
        console.log(data);
    });
});