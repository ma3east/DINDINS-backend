var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 9000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');

//var User = require('./models/user');
//var Product = require('./models/product');
//var Transaction = require('./models/transaction');

mongoose.connect('mongodb://localhost/dindins');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(require('./controllers'));


app.listen(port);
console.log("Dindin bells are ringing on port " + port);