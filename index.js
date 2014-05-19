var server = require('./server'),
    router = require('./router');

var handle = {};
handle['/'] = function (res) {
  res.end('start');
};
handle['/sup'] = function (res) {
  res.end('sup');
};

server.start(handle, router.route);

