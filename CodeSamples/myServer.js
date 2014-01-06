var http = require('http');

function start(cb) {
	var server = http.createServer(cb);
	server.listen(8000);
}

exports.start = start;