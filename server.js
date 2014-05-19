var http = require('http');

var port = 8888;

function start() {
  function onRequest(req, res) {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello World!');
  }

  http.createServer(onRequest).listen(port);
  console.log('Server listening on port %s', port);
};

exports.start = start;

