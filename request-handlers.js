var formidable = require('formidable');

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
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    console.log(fields);
    console.log(files);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Data posted: "' + fields.text + '"');
    res.end();
  });
  //var body = '';
  //req.on('data', function (chunk) {
  //  body += chunk.toString();
  //});

  //req.on('end', function () {
  //});
}

exports.start = start;
exports.upload = upload;

