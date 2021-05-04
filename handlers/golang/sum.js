const http = require('http');

const golangSumHandler = (req, res) => {
  const url = new URL(req.url, 'http://localhost/').searchParams;
  const p1 = Number(url.get('p1'));
  const p2 = Number(url.get('p2'));

  const options = {
    hostname: 'localhost',
    port: 8090,
    path: `/sum?p1=${p1}&p2=${p2}`,
    method: 'GET',
  };

  let result = '';

  console.time('Golang: sum');

  const request = http.request(options, (response) => {
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      console.timeEnd('Golang: sum');

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

module.exports = golangSumHandler;
