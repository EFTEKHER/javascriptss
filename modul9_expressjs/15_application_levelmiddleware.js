var express = require('express');
var app = express();

// app.use(function(req, res, middle) {

//   console.log("I am middle");
//     middle();
// });
app.use(function(req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/contact', function(req, res) {
    res.send('Ini adalah halaman contact');
});
app.get('/about', function(req, res) {
    res.send('Ini adalah halaman about');
});

app.listen(8080, function() {
    console.log('Server berjalan pada http://localhost:8080');
})