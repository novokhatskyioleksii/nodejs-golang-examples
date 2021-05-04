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

const nodejsMd5Handler = require('./handlers/nodejs/md5');
const nodejsGolangMd5Handler = require('./handlers/nodejs-golang/md5');
const golangMd5Handler = require('./handlers/golang/md5');

const nodejsSha256Handler = require('./handlers/nodejs/sha256');
const nodejsGolangSha256Handler = require('./handlers/nodejs-golang/sha256');
const golangSha256Handler = require('./handlers/golang/sha256');

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

  'GET/nodejs/md5': nodejsMd5Handler,
  'GET/nodejs-golang/md5': nodejsGolangMd5Handler,
  'GET/golang/md5': golangMd5Handler,

  'GET/nodejs/sha256': nodejsSha256Handler,
  'GET/nodejs-golang/sha256': nodejsGolangSha256Handler,
  'GET/golang/sha256': golangSha256Handler,
};

http
  .createServer((req, res) => {
    const handler = router[req.method + new URL(req.url, 'http://localhost/').pathname] || router['default'];
    handler(req, res);
  })
  .listen(8080, () => {
    console.log('Nodejs: Server is running at http://localhost:8080/');
  });
