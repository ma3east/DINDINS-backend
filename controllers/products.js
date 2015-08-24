var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Transaction = require('../models/transaction');
var Product = require('../models/product');


//NOTE: Don't need to use /api/products as this bit of the file pulls from index

//get list of products - WORKING
router.get('/', function(req, res) {
  Product.find().populate('addedBy').exec(function(err, products) {
    if (err) {
      res.json({ err: err, message: 'Something wrong - where are the products!' });
    } else {
      res.json(products);
    }
  });
});

//find a single product - WORKING
router.get('/:product_id', function(req, res){
  Product.findById(req.params.product_id).populate('addedBy').exec(function(err, product) {
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

// update a product - in progress

// router.post('/:product_id', function(req, res) {
//   Product.findByIdAndUpdate(req.params.id, req.body, function(err, product) {
//     if (err) {
//       console.log("product not updated - please check request");
//       res.send(err);
//     } else {
//       console.log(req.params.id);
//       console.log(req.body);
//       res.json(req.body);
//     }

//   });
// });

// router.put('/:product_id', function(req, res) {
//   Product.findById(req.params.product_id, function(err, product) {
//     if (err) {
//       res.send(err);
//     }

//     product.name = req.body.name;
//     product.image = req.body.image;
//     product.quantity = req.body.quantity;
//     product.bestBefore = req.body.bestBefore;
//     product.available = req.body.available;

//     product.save(function(err) {
//       if (err) {
//         res.send(err);
//       } else {
//         console.log("product updated!"); 
//       }
//       res.json(product);
//     });
//   });
// });
// seems to update with no erros but checking if updating right id
router.put('/:product_id', function(req,res) {
  Product.findById(req.params.product_id, function(err, product) {
    if (err) {
      console.log(err);
      // console.log("params prod id " + req.params.product_id + " params id " + req.params.id + ' Product updated!')
      res.send(err);
    }

    for (property in req.body) {
      product[property] = req.body[property];
    }

    // save the product
    product.save(function(err) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log("Product updated for product_id " + req.params.product_id);
        res.json(product);
      }
    });
  });
})

// delete a product - WORKING
router.delete('/:product_id', function(req, res, next) {

  Product.findByIdAndRemove(req.params.product_id, function(err, product) {
    if (err) {
      res.json(err);
      console.log("There was an error, deleting the product, please check the request.");
      
    } else {
      console.log('Product has been deleted');
      res.json({ message: 'Product has been deleted - Yah!' } );
    }
  });
});


module.exports = router