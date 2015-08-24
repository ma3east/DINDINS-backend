var express = require('express');
var router = express.Router();
//var User = require('./models/user');

//do we really need a users index! to get all users?
router.get('/api/users', function(req, res) {

  res.json({ message: 'This is the api users index.'});
});

//create a new user
router.post('api/users', function(req, res) {

  //code!

});




module.exports = router


