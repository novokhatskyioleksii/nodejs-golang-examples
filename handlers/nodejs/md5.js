const crypto = require('crypto');

const md5 = async (num) => {
  for (let i = 0; i < num; i++) {
    await crypto.createHash('md5').update('nodejs-golang').digest('hex');
  }
  return num;
};

const nodejsMd5Handler = async (req, res) => {
  console.time('Nodejs: md5');

  const url = new URL(req.url, 'http://localhost/').searchParams;
  const n = Number(url.get('n'));

  if (n > 10000) throw new Error('Less than 10000, please');

  const result = await md5(n);

  console.timeEnd('Nodejs: md5');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result: result.toString() }));
  res.end();
};

module.exports = nodejsMd5Handler;
