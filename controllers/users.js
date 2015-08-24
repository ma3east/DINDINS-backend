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

//find a single user - WORKING
router.get('/:user_id', function(req, res){
  User.findById(req.params.user_id, function(err, user) {
    if (err) {
      res.send(err);
    }
    console.log('user id ' + req.params.user_id + 'received');
    res.json(user);
    
  });
});

// create new user - WORKING
router.post('/', function(req, res, next) {
  var user = new User(req.body)

  user.save(function(err) {
    if (err) {
      res.send(err)
    } 
    console.log('User added!');
    res.json(user);
  });

});



module.exports = router


