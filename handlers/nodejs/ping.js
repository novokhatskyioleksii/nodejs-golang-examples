const nodejsPingHandler = (req, res) => {
  console.time('Nodejs: ping');

  const result = 'Pong';

  console.timeEnd('Nodejs: ping');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result }));
  res.end();
};

module.exports = nodejsPingHandler;
