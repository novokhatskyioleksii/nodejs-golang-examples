const http = require('http');

const golangMd5Handler = (req, res) => {
  const url = new URL(req.url, 'http://localhost/').searchParams;
  const n = Number(url.get('n'));

  if (n > 10000) throw new Error('Less than 10000, please');

  const options = {
    hostname: 'localhost',
    port: 8090,
    path: `/md5?n=${n}`,
    method: 'GET',
  };

  let result = '';

  console.time('Golang: md5');

  const request = http.request(options, (response) => {
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      console.timeEnd('Golang: md5');

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

module.exports = golangMd5Handler;
