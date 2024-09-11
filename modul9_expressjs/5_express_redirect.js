var express = require('express');
var app = express();
//res.end--response endpoint
//res.send--response body
app.get('/one', function(req, res){
    res.end('Hello World one');            
});


app.get("/bangladesh", function(req, res){
    res.redirect("http://localhost:8080/india");
})
app.get("/india", function(req, res){
    res.send("Bangladesh");
})
app.listen(8080, function(){
    console.log("server run is successful");
});