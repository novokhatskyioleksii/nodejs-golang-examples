const fibonacci = (num) => {
  let a = BigInt(1),
    b = BigInt(0),
    temp;

  while (num > 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

const nodejsFibonacciHandler = (req, res) => {
  console.time('Nodejs: fibonacci');
  const url = new URL(req.url, 'http://localhost/').searchParams;
  const n = Number(url.get('n'));
  const result = fibonacci(n);
  console.timeEnd('Nodejs: fibonacci');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result: result.toString() }));
  res.end();
};

module.exports = nodejsFibonacciHandler;
