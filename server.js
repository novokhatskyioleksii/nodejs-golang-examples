const http = require('http');

const error404Handler = require('./handlers/404');

const nodejsPingHandler = require('./handlers/nodejs/ping');
const nodejsGolangPingHandler = require('./handlers/nodejs-golang/ping');
const golangPingHandler = require('./handlers/golang/ping');

const nodejsSumHandler = require('./handlers/nodejs/sum');
const nodejsGolangSumHandler = require('./handlers/nodejs-golang/sum');
const golangSumHandler = require('./handlers/golang/sum');

const nodejsFibonacciHandler = require('./handlers/nodejs/fibonacci');
const nodejsGolangFibonacciHandler = require('./handlers/nodejs-golang/fibonacci');
const golangFibonacciHandler = require('./handlers/golang/fibonacci');

const router = {
  'default': error404Handler,

  'GET/nodejs/ping': nodejsPingHandler,
  'GET/nodejs-golang/ping': nodejsGolangPingHandler,
  'GET/golang/ping': golangPingHandler,

  'GET/nodejs/sum': nodejsSumHandler,
  'GET/nodejs-golang/sum': nodejsGolangSumHandler,
  'GET/golang/sum': golangSumHandler,

  'GET/nodejs/fibonacci': nodejsFibonacciHandler,
  'GET/nodejs-golang/fibonacci': nodejsGolangFibonacciHandler,
  'GET/golang/fibonacci': golangFibonacciHandler,
};

http
  .createServer((req, res) => {
    const handler = router[req.method + new URL(req.url, 'http://localhost/').pathname] || router['default'];
    handler(req, res);
  })
  .listen(8080, () => {
    console.log('Nodejs: Server is running at http://localhost:8080/');
  });
