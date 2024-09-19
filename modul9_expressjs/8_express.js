var express=require('express');
var app= express();


app.get('/', function(req, res)
{
     let firstName = req.query.firstName;
        let lastName = req.query.lastName;
    res.end('Hello '+firstName+' '+lastName);
})




app.listen(8000,function(){
    console.log('Server is running on port 8000');
});