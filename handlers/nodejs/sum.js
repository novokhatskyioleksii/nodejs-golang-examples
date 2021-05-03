const nodejsSumHandler = (req, res) => {
  console.time('Nodejs: sum');
  const url = new URL(req.url, 'http://localhost/').searchParams;
  const p1 = Number(url.get('p1'));
  const p2 = Number(url.get('p2'));
  const result = p1 + p2;
  console.timeEnd('Nodejs: sum');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result }));
  res.end();
};

module.exports = nodejsSumHandler;
