// var fs = require('fs');
// var http = require('http');
// var server = http.createServer(function(req, res){
//     if(req.url=='/')
//     {
//     let data=  fs.readFileSync('home.html', 'utf8');
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(data);
//     }
//     else if(req.url=='/Contact')
//     {
//         let data= fs.readFileSync('contact.html', 'utf8');
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(data);

//     }
//     else if(req.url=='/Terms')
//     {
//      let data= fs.readFileSync('terms.html', 'utf8');
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(data);
//     }
//     else if(req.url=='/About')
//     {
//      let data=fs.readFileSync('about.html','utf8');
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(data);
//     }
//     else
//     {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('Page not found');
//         res.end();
//     }
// });

// server.listen(5000);
// console.log('Server is running on http://localhost:5000');
var axios= require('axios');
var url= "https://restcountries.com/v3.1/all";

axios.get(url).then(function(response) {
    let CountryList=response.data;
    let StatusCode=response.status;
    console.log(response.data);
}).catch(function(error){
    console.log(error);
});