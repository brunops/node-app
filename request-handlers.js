function start(res) {
  var body = '<html>'
    + '<head>'
    + '  <meta charset="utf-8">'
    + '  <meta name="viewport" content="width=device-width">'
    + '  <title>Start</title>'
    + '</head>'
    + '<body>'
    + '  <form method="POST" action="/upload">'
    + '    <input type="text" name="text">'
    + '    <input type="submit" name="submit" value="Send">'
    + '  </form>'
    + '</body>'
    + '</html>';

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(body);
  res.end();
}

function sup(res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Sup!');
  res.end();
}

exports.start = start;
exports.sup = sup;

