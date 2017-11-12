var cli = require('staticsite-cli');
var http = require("http");
var path = require("path");

var PORT = process.env.PORT || 5678;
console.log(`Listening on port ${PORT}`);

var server = http.createServer(function onRequest(req, res) {
  if(req.method !== 'GET' || req.url !== '/') {
    return res.end();
  }
  console.log('Handling valid request...');
});

server.listen(PORT);
