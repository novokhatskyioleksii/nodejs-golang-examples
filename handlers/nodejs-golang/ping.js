const nodejsGolangPingHandler = async (req, res) => {
  console.time('Nodejs-Golang: ping');

  const result = global.GolangPing();

  console.timeEnd('Nodejs-Golang: ping');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ result }));
  res.end();
};

module.exports = nodejsGolangPingHandler;
