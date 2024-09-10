var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req, res){
    if(req.url=='/')
    {
        fs.writeFile('demo.txt','Hello,world',function(err, data){
            if(err)
            {
                res.writeHead(404,{'Content-Type':'text/html'})
                res.write('File not found')
                res.end();
        
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File created successfully')
                res.end();
         }
        })
    }
});
server.listen(5050);
console.log(`listening on http://localhost:5050`);