var express = require('express');
var path = require('path');
var app = express();

app.use(express.json()); // To parse JSON bodies

// Serve the HTML file on a GET request to '/'
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle POST request to '/'
app.post('/', function(req, res) {
    let userName = req.header('UserName');
    let password = req.header('Password');
    
    res.send("userName: " + userName + " password: " + password);
});

app.listen(5000, function() {
    console.log('Server is running on port 5000');
});
