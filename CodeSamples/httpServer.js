var http = require('http');

var server = http.createServer(function(request, response) {
	console.log('Request received.');
	response.writeHead(200);
	response.end('<h1>Hello, world</h1>');
});

server.listen(8000);
console.log('Server started.')