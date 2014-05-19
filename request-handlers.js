function start(res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Wazzup!');
  res.end();
}

function sup(res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Sup!');
  res.end();
}

exports.start = start;
exports.sup = sup;

