var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.post('/', function(req, res){
   let JSONData = req.body;
   let JSONstring = JSON.stringify(JSONData);
   res.send(JSONstring); 
});



app.listen(8080,function(){
    console.log('Server berjalan pada http://localhost:8080');
});