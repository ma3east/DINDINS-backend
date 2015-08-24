var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Transaction = require('../models/transaction');
var Product = require('../models/product');


//NOTE: Don't need to use /api/products as this bit of the file pulls from index

//get list of products - WORKING
router.get('/', function(req, res) {
  Product.find(function(err, products) {
    if (err) {
      res.json({ err: err, message: 'Something wrong - where are the products!' });
    } else {
      res.json(products);
    }
  });
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
});

// create new product now working
router.post('/', function(req, res, next) {
  var product = new Product(req.body)

  product.save(function(err) {
    if (err) {
      res.send(err)
    } 
    console.log('Product added!');
    res.json(product);
  });

});


module.exports = router