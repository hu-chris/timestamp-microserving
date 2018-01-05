var fs = require('fs');

function home (pathname, res) {
  fs.readFile('index.html', function(err, page) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(page);
        res.end();
    });
};

function natTime (pathname, res) {
  pathname = pathname.replace(/%20/g, ' ');
  var date = new Date(pathname);
  if (date.toDateString() != 'Invalid Date') {
    res.write(JSON.stringify({ unix: date.getTime() / 1000, natural: date.toDateString().slice(4) }));
    res.end();
  } else {
    res.write(JSON.stringify({ unix: null, natural: null }));
    res.end();
  };
}

function unixTime (pathname, res) {
  var date = new Date(+pathname * 1000);
  if (date.toDateString() != 'Invalid Date') {
  res.write(JSON.stringify({ unix: date.getTime() / 1000, natural: date.toDateString().slice(4) }));
  res.end();
  } else {
    res.write(JSON.stringify({ unix: null, natural: null }));
    res.end();
  };
};

exports.home = home;
exports.natTime = natTime;
exports.unixTime = unixTime;