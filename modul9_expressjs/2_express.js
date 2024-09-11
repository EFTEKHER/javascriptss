var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World');            
});

// app.get("/terms", function(req, res){
//     res.send("Terms and Conditions");
// })
// app.get("/contact", function(req, res){
//     res.send("Contact");
// })
// app.get("/about", function(req, res){
//     res.send("about");
// })

app.post("/post", function(req, res){
    res.send("post");
})
app.put("/put", function(req, res){
    res.send("put");
})
app.delete("/delete", function(req, res){
    res.send("delete");
})
app.listen(8080, function(){
 console.log("server run is successful");
})