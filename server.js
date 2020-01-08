'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer')
var upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5000000 }
})

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});
//////////////////////My App////////////////////////////////
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  console.log(req.file)
  res.send({
    filename: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})
////////////////////////////////////////////////////////////
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
