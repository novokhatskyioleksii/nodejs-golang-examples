const nodejsGolangMd5Handler = async (req, res) => {
  console.time('Nodejs-Golang: md5');

  const url = new URL(req.url, 'http://localhost/').searchParams;
  const n = Number(url.get('n'));

  if (n > 10000) throw new Error('Less than 10000, please');

  const result = global.GolangMd5(n);

  console.timeEnd('Nodejs-Golang: md5');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result: result.toString() }));
  res.end();
};

module.exports = nodejsGolangMd5Handler;
