const error404Handler = (req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ error: 404 }));
  res.end();
};

module.exports = error404Handler;
