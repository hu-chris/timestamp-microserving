var http = require('http');
var url = require('url');

function start(router, handle) {
  http.createServer(function(req, res) {
    req.setEncoding('utf8');
    var pathname = url.parse(req.url).pathname.slice(1);
    console.log(pathname);
    router(pathname, res, handle);
  }).listen(process.env.PORT);
}

exports.start = start;