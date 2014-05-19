var http = require('http');

var port = 8888;

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end('Hello World!');
}).listen(port);

console.log('Server listening on port %s', port);

