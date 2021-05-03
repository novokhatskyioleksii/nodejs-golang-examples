const http = require('http');

const golangfibonacciHandler = (req, res) => {
  const url = new URL(req.url, 'http://localhost/').searchParams;
  const n = Number(url.get('n'));

  const options = {
    hostname: 'localhost',
    port: 8090,
    path: `/fibonacci?n=${n}`,
    method: 'GET',
  };

  let result = '';

  console.time('Golang: fibonacci');

  const request = http.request(options, (response) => {
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      console.timeEnd('Golang: fibonacci');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify({ result }));
      res.end();
    });
  });

  request.on('error', (error) => {
    console.error(error);
  });

  request.end();
};

module.exports = golangfibonacciHandler;
