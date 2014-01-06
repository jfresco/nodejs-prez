var fs = require('fs'),
	http = require('http');

var server = http.createServer(function(request, response) {
	fs.readFile('lorem.txt', function(err, data) {
		if (err) {
			console.log(err);
			response.writeHead(500);
			response.end(err);
		} else {
			response.writeHead(200);
			response.end('<p>' + data + '</p>');
		}
	});
});

server.listen(8000);
console.log('Server started.')