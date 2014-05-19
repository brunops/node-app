
exports.route = function (handle, path, req, res) {
  if (typeof handle[path] === 'function') {
    handle[path](res);
  }
  else {
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.write('Path "' + path + '" not found');
    res.end();
  }
};


