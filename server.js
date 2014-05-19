var http = require('http'),
    url = require('url');

var port = 8888;

function start(handle, route) {
  function onRequest(req, res) {
    var path = url.parse(req.url).pathname;

    console.log('Request received on "%s"', path);
    route(handle, path, req, res);
  }

  http.createServer(onRequest).listen(port);
  console.log('Server listening on port %s', port);
};

exports.start = start;

