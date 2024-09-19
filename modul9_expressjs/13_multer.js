var express = require('express');
var multer = require('multer');
var app = express();

// Set up Multer storage
var storage = multer.memoryStorage(); // or use diskStorage() for saving files on disk
var upload = multer({ storage: storage });

// Use multer's array() method for handling multiple file uploads
app.use(upload.array('files', 10)); // 'files' is the field name, 10 is the max number of files

// Serve static files
app.use(express.static('public'));

app.post('/', function(req, res) {
   let JSONData = req.body;
   res.send(JSONData);
   res.send(JSON.stringify(JSONData)); // This second send is redundant, remove one
});

app.listen(8080, function() {
    console.log('Server berjalan pada http://localhost:8080');
});
