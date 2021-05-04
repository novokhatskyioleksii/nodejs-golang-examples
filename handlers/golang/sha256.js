const http = require('http');

const golangSha256Handler = (req, res) => {
  const url = new URL(req.url, 'http://localhost/').searchParams;
  const n = Number(url.get('n'));
  if (n > 10000) throw new Error('Less than 10000, please');

  const options = {
    hostname: 'localhost',
    port: 8090,
    path: `/sha256?n=${n}`,
    method: 'GET',
  };

  let result = '';

  console.time('Golang: sha256');

  const request = http.request(options, (response) => {
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      console.timeEnd('Golang: sha256');

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

module.exports = golangSha256Handler;
