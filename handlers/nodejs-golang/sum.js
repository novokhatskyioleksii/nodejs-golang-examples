const nodejsGolangSumHandler = async (req, res) => {
  console.time('Nodejs-Golang: sum');

  const url = new URL(req.url, 'http://localhost/').searchParams;
  const p1 = Number(url.get('p1'));
  const p2 = Number(url.get('p2'));

  const result = global.GolangSum(p1, p2);

  console.timeEnd('Nodejs-Golang: sum');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result: result.toString() }));
  res.end();
};

module.exports = nodejsGolangSumHandler;
