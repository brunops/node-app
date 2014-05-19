var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./request-handlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;

server.start(handle, router.route);

