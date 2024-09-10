var fs = require('fs');
var http = require('http');

var server= http.createServer(function(req, res){
   if(req.url=="/")
   {
    fs.rename('test.txt', 'test2.txt', function(err){
        if(err){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('File rename failed');
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('File rename successful');
            res.end();
        }
    });
   }
});
server.listen(8080);
console.log('Server is running on http://localhost:8080');