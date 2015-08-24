var express = require('express');
var app = express();
var router = express.Router();
var Product = require('../models/product');
var User = require('../models/user');
var Transaction = require('../models/transaction');

// router.use('/api', router);
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

module.exports = router