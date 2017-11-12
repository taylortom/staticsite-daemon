var cli = require('staticsite-cli');
var fs = require('fs');
var http = require("http");
var path = require("path");

var PORT = process.env.PORT || 5678;

var server = http.createServer(function onRequest(req, res) {
  if(req.method !== 'POST' || req.url !== '/github') {
    console.log(`Ignoring invalid request...${req.url}`);
    return res.end(fs.readFileSync('public/landing.html'));
  }
  var data = "";

  req.on('data', function(reqData) {
    data += reqData.toString();
  });
  req.on('end', function() {
    data = JSON.parse(data);
    console.log(JSON.stringify(data, null, 2));
    return res.end(fs.readFileSync('public/landing.html'));
  });
});

console.log(`Listening on port ${PORT}`);
server.listen(PORT);
