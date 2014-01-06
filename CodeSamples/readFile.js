var fs = require('fs');
var data = fs.readFileSync('lorem.txt');
console.log('File content: ' + data);
console.log('Hello, world!');