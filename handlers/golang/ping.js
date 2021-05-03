const http = require('http');

const golangPingHandler = (req, res) => {
  const options = {
    hostname: 'localhost',
    port: 8090,
    path: '/ping',
    method: 'GET',
  };

  let result = '';

  console.time('Golang: ping');

  const request = http.request(options, (response) => {
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      console.timeEnd('Golang: ping');

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

module.exports = golangPingHandler;
