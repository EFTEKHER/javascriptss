var fs= require('fs');
var http= require('http');

var server= http.createServer(function(req, res){
    if(req.url=="/")
    {
        let result=fs.existsSync("demo.txt");
        if(result){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('File exists');
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('File does not exist');
            res.end();
        }
    }
});
server.listen(5000);
console.log('Server is running on http://localhost:5000');