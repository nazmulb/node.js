var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: '../../tmp/' });

app.use(express.static('../../public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload.any());

app.get('/upload.html', function (req, res) {
   res.sendFile( __dirname + "/" + "upload.html" );
});

app.post('/file_upload', function (req, res) {
   console.log(req.files[0].originalname);
   console.log(req.files[0].path);
   console.log(req.files[0].mimetype);
   var file = __dirname + "/upload/" + req.files[0].originalname;
   
   fs.readFile( req.files[0].path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files[0].originalname
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});