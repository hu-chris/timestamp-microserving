var server = require('./server');
var router = require('./router');
var handlers = require('./handlers');

var handle = {}
handle['/'] = handlers.home;
handle['natTime'] = handlers.natTime;
handle['unixTime'] = handlers.unixTime;

server.start(router.router, handle);