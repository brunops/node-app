var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./request-handlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/sup'] = requestHandlers.sup;

server.start(handle, router.route);

