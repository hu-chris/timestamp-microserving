    
function router(pathname, res, handle) {
  var request;
  if (!pathname) {
    request = '/';
  } else if (pathname.match(/[^0-9]/g)) {
    request = 'natTime';
  } else if (!(pathname.match(/[^0-9]/g))) {
    request = 'unixTime';
  };
  
  handle[request](pathname, res);
  }

exports.router = router;