var express = require('express');
var app = express();
//res.end--response endpoint
//res.send--response body
app.get('/one', function(req, res){
    res.end('Hello World one');            
});


app.post("/post", function(req, res){
    res.send("Hello World two");


})
app.get("/three", function(req, res){
    res.status(401).end('unauthorized');
});
app.get("/four", function(req, res){
    res.status(201).end();
});

app.get("/five", function(req, res){
  res.download("../module-8-js/4index.html"); 
});
app.listen(8080, function(){
    console.log("server run is successful");
});