var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Product = require('../models/product');
var Transaction = require('../models/transaction');

//test

//get list of products - WORKING
router.get('/', function(req, res) {
  Product.find(function(err, products) {
    if (err) {
      res.json({ err: err, message: 'Something wrong - where are the products!' });
    } else {
      res.json({ products: products, message: 'This is the api products index.'} );
    }

  })
});

//find a single product - WORKING
router.get('/:product_id', function(req, res){
  Product.findById(req.params.product_id, function(err, product) {
    if (err) {
      res.send(err);
    }
    console.log('product id ' + req.params.product_id + 'received');
    res.json(product);
    
  });
})

//does not work on this page - why:
// router.get('/api/products', function(req, res) {
//   Product.find(function(err, products) {
//     if (err) {
//       console.log(err);
//       res.json({ message: 'Something wrong - where are the products!' });
//     } else {
//       res.json({ products: products, message: 'This is the api products index.'} );
//     }
//   })
// });


module.exports = router