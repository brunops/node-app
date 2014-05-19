var querystring = require('querystring');

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

function upload(res, req) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk.toString();
  });

  req.on('end', function () {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Data posted: "' + querystring.parse(body).text + '"');
    res.end();
  });
}

exports.start = start;
exports.upload = upload;

