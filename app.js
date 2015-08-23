var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dindins');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(require('./controllers'));







app.listen(9000, function() {
  console.log("Dindin bells are ringing on port 9000!");
});