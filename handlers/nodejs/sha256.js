const crypto = require('crypto');

const sha256 = async (num) => {
  for (let i = 0; i < num; i++) {
    await crypto.createHash('sha256').update('nodejs-golang').digest('hex');
  }
  return num;
};

const nodejsSha256Handler = async (req, res) => {
  console.time('Nodejs: sha256');
  const url = new URL(req.url, 'http://localhost/').searchParams;
  const n = Number(url.get('n'));
  if (n > 10000) throw new Error('Less than 10000, please');
  const result = await sha256(n);
  console.timeEnd('Nodejs: sha256');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result }));
  res.end();
};

module.exports = nodejsSha256Handler;
