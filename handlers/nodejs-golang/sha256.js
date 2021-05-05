const nodejsGolangSha256Handler = async (req, res) => {
  console.time('Nodejs-Golang: sha256');

  const url = new URL(req.url, 'http://localhost/').searchParams;
  const n = Number(url.get('n'));

  if (n > 10000) throw new Error('Less than 10000, please');

  const result = global.GolangSha256(n);

  console.timeEnd('Nodejs-Golang: sha256');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result: result.toString() }));
  res.end();
};

module.exports = nodejsGolangSha256Handler;
