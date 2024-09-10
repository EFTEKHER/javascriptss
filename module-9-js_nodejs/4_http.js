var http = require('http');
var URL = require('url');

var server = http.createServer(function(req, res) {
    var myURL = "https://eftekheraliefte.vercel.app/#timeline?year=2021&month=february";
    var myURLObject = URL.parse(myURL, true);
    var myHostName = myURLObject.host;
    var myPathName = myURLObject.pathname;
    var mySearchName = myURLObject.search;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hostname: " + myHostName + "\n");
    res.write("Search: " + mySearchName + "\n");
    res.write("Pathname: " + myPathName + "\n");
    res.write("URL Object: " + JSON.stringify(myURLObject) + "\n"); // Convert object to string
    res.end(); // End the response
});

server.listen(5050);

console.log("Server is running on http://localhost:5050");
