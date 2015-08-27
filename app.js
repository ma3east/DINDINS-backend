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
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}

mongoose.connect('mongodb://localhost/dindins');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(allowCrossDomain);

app.use(require('./controllers'));

//development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//===============JWT STUFF=============
var expressJWT = require('express-jwt')
,   jwt        = require('jsonwebtoken');
var secret     = "WHOSREADYFORDINDINS";

app.use("/", expressJWT({secret:secret}))
app.use(function(error, request, response, next){
  if(error.name == "UnauthorizedError") {
    response.status(401).json({message: "You need a key for that"})
  }
})

app.post('/authorization', function(request, response) {
  var myInfo = {
    user:request.body.username,
    password:request.body.password,
    id:request.body._id
  }
  var token = jwt.sign(myInfo, secret);
  response.json({ user: myInfo, token: token })
})

app.listen(port);
console.log("Dindin bells are ringing on port " + port);

