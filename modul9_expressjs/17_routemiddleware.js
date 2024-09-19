var express = require('express');
var app=express();

app.get('/',function(req,res){
    res.send('This is homepage');

})
app.get('/contact',function(req,res){

    res.send('This is contact page');

});
app.use('/about',function(req,res,next){
    console.log('A new request received at ' + Date.now());
    next();

})
app.get('/about', function(req,res){
    res.send('This is about page');
})


app.listen(3000,function(){
    console.log("server is running at http://localhost:3000 ")

})