var express = require('express');
var multer = require('multer');
var app = express();

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);  // fixed issue here (comma replaced with semicolon)
  }
});

var upload=multer({storage: storage}).single('myFile');
app.post('/',function(req, res){
  upload(req, res, function(err){
    if(err){
      return res.end('Error uploading file.');
    }
    res.end('File is uploaded');
  });
});

app.listen(3000, function() {
  console.log('Server berjalan pada http://localhost:3000');
});
