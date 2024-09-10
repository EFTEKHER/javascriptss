var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req, res){
    if(req.url=="/")
    {
        fs.unlink('a.txt', function(err){
            if(err){
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File delete failed');
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File delete successful');
                res.end();
            }
        });
    }
})
server.listen(5000);

console.log('Server is running on http://localhost:5000');