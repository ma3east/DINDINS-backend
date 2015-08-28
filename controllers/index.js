var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var User = require('../models/user');
var Transaction = require('../models/transaction');
var expressJWT = require('express-jwt');

//middleware to check for token
router.use('/api', expressJWT({ secret: process.env.DINDINSSECRET || "Secret" }).unless({ path: ['/api/users/login', '/api/transactions' ,'/api/users', '/api/products/search']}), function (error, request, response, next) {
  if (error.name === 'UnauthorizedError') {
    console.log(error);
    response.status(401).json({message: 'You need an authorization token to view confidential information.'});
  }
});

// router.use('/api', router);
router.use('/api/users', require('./users'))
router.use('/api/products', require('./products'))
router.use('/api/transactions', require('./transactions'))

module.exports = router