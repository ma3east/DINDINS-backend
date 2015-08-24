var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 9000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('./models/user');
var Product = require('./models/product');
var Transaction = require('./models/transaction');

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}


mongoose.connect('mongodb://localhost/dindins');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(allowCrossDomain);

app.use(require('./controllers'));

app.listen(port);
console.log("Dindin bells are ringing on port " + port);

// var prod1 = new Product({

//   name: "pasta",
//   quantity: "2 packets"

// })

// prod1.save(function(err) {
//   if (err) console.log(err, "nope something went wrong");
//   console.log("success prod 1 saved!");

// });

// var prod2 = new Product({

//   name: "rice",
//   quantity: "3 packets",
//   image: "http://www.fillmurray.com/150/150"

// })

// prod2.save(function(err) {
//   if (err) console.log(err, "nope something went wrong");
//   console.log("success prod 2 saved!");

// });