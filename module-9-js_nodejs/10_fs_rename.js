var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){
    if(req.url=="/")
    {
        
let error=fs.renameSync('demo1.txt', 'demo2.txt');
if(error){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('File rename failed');
    res.end();

}
else{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('File rename successful');
    res.end();
}
    }
})
server.listen(5000);
console.log('Server is running on http://localhost:5000');