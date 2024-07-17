const { default: QumraClient } = require("qumra-client");

const client = new QumraClient({
  secretKey: process.env.secretKey,
  version: 'v1'
});


module.exports = client