const http = require('http');

const instantiateGolang = require('./instantiate');
const router = require('./router');

(async () => {
  await instantiateGolang();
  http.createServer((req, res) => {
    const handler = router[req.method + new URL(req.url, 'http://localhost/').pathname] || router['default'];
    handler(req, res);
  })
  .listen(8080, () => {
    console.log('Nodejs: Server is running at http://localhost:8080/');
  });
})();
