//http model first

var http = require('http');

var server=http.createServer(function(req, res){
  res.end('Hello World');  
});

server.listen(5050);
console.log("Server is running on http://localhost:5050");