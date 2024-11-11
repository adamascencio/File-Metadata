var express = require('express');
var cors = require('cors');
const multer = require('multer');
require('dotenv').config()

var app = express();
const upload = multer()

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.any(), (req, res) => {
  const file = req.files[0];
  const name = file.originalname;
  const type = file.mimetype;
  const size = file.size;
  res.json({ name, type, size })
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
