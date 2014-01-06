var myServer = require('./myServer.js');

myServer.start(function(req, res) {
	res.writeHead(200);
	res.end("hello world");
})