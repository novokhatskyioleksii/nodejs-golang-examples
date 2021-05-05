const { instantiate } = require('nodejs-golang');

const instantiateGolang = async () => {
  console.log('Nodejs: Instantiate Golang functions started');
  await instantiate('ping');
  await instantiate('sum');
  await instantiate('fibonacci');
  await instantiate('md5');
  await instantiate('sha256');
  console.log('Nodejs: Instantiate Golang functions finished');
};

module.exports = instantiateGolang;
