var fs = require('fs');
fs.readFile('lorem.txt', function(err, data) {
  console.log('File content: ' + data);
});

console.log('Hello, world!');