var express= require('express');

app=express();


app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(8080, function(){
    console.log('Server berjalan pada http://localhost:8080');
});