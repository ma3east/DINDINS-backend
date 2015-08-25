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
router.post('/', function(req, res) {
  var user = new User(req.body)

  user.save(function(err) {
    if (err) {
      res.send(err)
    } 
    console.log('User added!');
    res.json(user);
  });

});

// update a user - WORKING

router.put('/:user_id', function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {
      console.log(err);
      res.send(err);
    }

    for (property in req.body) {
      user[property] = req.body[property];
    }

    // save the updated user
    user.save(function(err) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log("User updated for user_id " + req.params.user_id);
        res.json(user);
      }
    });
  });
})

// delete a user - WORKING
router.delete('/:user_id', function(req, res) {

  User.findByIdAndRemove(req.params.user_id, function(err, user) {
    if (err) {
      res.json(err);
      console.log("There was an error, deleting the user, please check the request.");
      
    } else {
      console.log('User has been deleted');
      res.json({ message: 'User has been deleted - Yah!' } );
    }
  });
});

module.exports = router


