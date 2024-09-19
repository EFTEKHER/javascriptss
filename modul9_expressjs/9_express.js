var express = require('express');
var app= express();


app.get('/', function(req, res){
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    let userAgent = req.header('User-Agent');
    // res.end(firstName + ' ' + lastName);
    res.end(userAgent);
})


app.listen(8000,function(){
    console.log('Server is running on port 8000');
});