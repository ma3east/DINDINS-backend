var express = require('express');
var app = express();
var router = express.Router();
var Product = require('../models/product');
var User = require('../models/user');
var Transaction = require('../models/transaction');

//router.use('/api', router);
router.use('/api/users', require('./users'))
router.use('/api/products', require('./products'))
router.use('/api/transactions', require('./transactions'))

//get api index - NO NEED FOR ANYTHING ON API INDEX
// router.get('/api', function(req, res) {

//   Product.find(function(err, products) {
//     if (err) {
//       res.json({ err: err, message: 'Something wrong - where are the products!' });
//     } else {
//       res.json({ products: products, message: 'This is a call to the DINDINS API index - are you running dangerously low on food!' } );
//     }
//   })
// });


//why does this route not work when on products page?  - ideally want on products page

//PRODUCT CONTROLLERS



//create a new product - not working
// router.post('/api/products', function(req, res) {

//   User.findById(req.body.user.id, function(err, product) {
//     if (err)
//       console.log(err);

//     Product.create(req.body, function(err2, product) {
//       if (err2) console.log(err2);
//       user.products.push(product);
//       res.json('/api/products/' + product.id);
//     });
//   });
// });

// router.post('/api/products', function(req, res) {
//   var product = new Product(req.body);

//   product.save(function(err) {
//     if (err) {
//       res.send(err)
//     } 
//     res.json({ message: 'Product added.' });
//   });

// });



//app.use('/api', router);

module.exports = router