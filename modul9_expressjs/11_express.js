var express = require('express');
var path = require('path');
var app = express();

app.use(express.urlencoded({ extended: true })); // To handle form submissions
app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('views', path.join(__dirname, 'views')); // Set the "views" directory

// Serve the HTML form on a GET request to '/'
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); // Serve your form
});

// Handle POST request to '/'
app.post('/', function(req, res) {
    let userName = req.body.username; // From form input
    let password = req.body.password; // From form input
    
    // Render the "success.ejs" template and pass the username and password
    res.render('success.ejs', { userName: userName, password: password });
});

app.listen(5000, function() {
    console.log('Server is running on port 5000');
});
