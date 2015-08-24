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
    } else {
      console.log('product id ' + req.params.product_id + 'received');
      res.json(product);
    }
  });
});

// create new product - WORKING
router.post('/', function(req, res, next) {
  console.log(req.body);
  var product = new Product(req.body)

  product.save(function(err) {
    if (err) {
      res.send(err)
      console.log('product was NOT added')
    } else {
      console.log(req.body.name + ' added!');
      res.json(product);
    }  
  });
});

// update a product


// delete a product

router.delete('/:product_id', function(req, res, next) {

  Product.findByIdAndRemove(req.params.product_id, function(err, product) {
    if (err) {
      res.json( { status: 500, message: err });
      console.log("There was an error, please check the request.");
      
    } else {
      console.log('Product has been deleted');
      res.json({ message: 'Product has been deleted - Yah!' } );
    }
  });
});

// router.delete('/:product_id', function(req, res, next) {

//   Product.findById(req.params.id, function(err, product) {

//     product.remove({}, function(err) {
//       if (err){
//         res.send(err);
//       } else {
//         console.log(req.body.name + ' Product has been deleted - way to go!');
//         res.json({ message: 'Product has been deleted - Yah!' } );
//       }    
//     });
//   });

// });

module.exports = router