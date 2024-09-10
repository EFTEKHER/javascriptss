var http= require('http');
var server=http.createServer(function(req, res) {

    if(req.url=="/")
    {
        let error=fs.writeFileSync('test.txt', 'Hello World');

        if(error){
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('File write failed');
            res.end();

        }
        else{
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('File write successful');
            res.end();  
        }
    }
})

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')