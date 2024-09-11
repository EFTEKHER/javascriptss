var express = require('express');


var app = express();


app.get('/one', function(req, res){
res.send("Hello World one");
});

app.get('/two', function(req, res){
    res.append("name","Rabbil Hasan");
    res.append("email","eftekherali2000@gmail.com");
    res.send("Hello world");
    res.status(201).end();

});
app.get('/three', function(req, res){
    // res.send("Hello world cooki");
    res.cookie("name","Rabbil");
    res.cookie("email","eftekherali2000@gmail.com");
    res.cookie("age","20");
    res.end("cookie set");
});
app.get('/four',function(req,res){
    res.clearCookie("name");
    res.end("cookie cleared");
})
app.listen(8080,function(){
    console.log("Server is running at 8080");
});