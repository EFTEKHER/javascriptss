var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req, res){
  fs.readFile('home.html',function(err, data){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end();
  })
});

server.listen(5050);
console.log("Server is running on http://localhost:5050");