var express = require('express');
var router = express.Router();

router.use('/api', router);
router.use('/api/users', require('./users'))
router.use('/api/products', require('./products'))
router.use('/api/transactions', require('./transactions'))

//get api index
router.get('/api', function(req, res) {
  res.json({ message: 'This is a call to the DINDINS API index - are you running dangerously low on food!' });

  // want to return a list of all the products!
});

//why does this route not work when on products page?
router.get('/api/products', function(req, res, err) {

  if (err)
    console.log(err);

  res.json({ message: 'This is the api products index.'});
  //need to return all products
});


module.exports = router