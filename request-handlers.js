var formidable = require('formidable'),
    fs = require('fs');

function start(res) {
  var body = '<html>'
    + '<head>'
    + '  <meta charset="utf-8">'
    + '  <meta name="viewport" content="width=device-width">'
    + '  <title>Start</title>'
    + '</head>'
    + '<body>'
    + '  <form method="POST" action="/upload" enctype="multipart/form-data">'
    + '    <input type="file" name="upload">'
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
    console.log(files); 
    fs.rename(files.upload.path, '/tmp/test.png', function (err) {
      console.log('image received at: ' + files.upload.path);
      if (err) {
        fs.unlink('/tmp/test.png');
        fs.rename(files.upload.path, '/tmp/test.png');
      }
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('received image:<br>');
    res.write('<img src="/show">');
    res.end();
  });
}

function show(res) {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  fs.createReadStream('/tmp/test.png').pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;

