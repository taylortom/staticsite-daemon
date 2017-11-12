var cli = require('staticsite-cli');
var fs = require('fs');
var http = require("http");
var path = require("path");

var PORT = process.env.PORT || 5678;
console.log(`Listening on port ${PORT}`);

var server = http.createServer(function onRequest(req, res) {
  if(req.method !== 'GET' || req.url !== '/github') {
    console.log(`Ignoring invalid request...${req.url}`);
    return res.end(fs.readFileSync('public/landing.html'));
  }
  console.log('Handling valid request...');
  res.end();
});

server.listen(PORT);
