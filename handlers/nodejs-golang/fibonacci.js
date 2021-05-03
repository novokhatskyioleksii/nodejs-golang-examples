const { instantiate } = require('nodejs-golang');

const nodejsGolangFibonacciHandler = async (req, res) => {
  await instantiate('fibonacci');
  console.time('Nodejs-Golang: fibonacci');
  const url = new URL(req.url, 'http://localhost/').searchParams;
  const n = Number(url.get('n'));
  const result = global.GolangFibonacci(n);
  console.timeEnd('Nodejs-Golang: fibonacci');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result: result.toString() }));
  res.end();
};

module.exports = nodejsGolangFibonacciHandler;
