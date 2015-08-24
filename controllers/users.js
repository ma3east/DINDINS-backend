var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Product = require('../models/product');
var Transaction = require('../models/transaction');

//get list of users (probably not needed but incase)
router.get('/', function(req, res) {
  User.find(function(err, users) {
    if (err) {
      res.json({ err: err, message: 'Something wrong - where are the users!' });
    } else {
      res.json(users);
    }
  })
});

//create a new user
router.post('/', function(req, res) {

  //code!

});




module.exports = router


