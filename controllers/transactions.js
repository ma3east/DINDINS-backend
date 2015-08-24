var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Product = require('../models/product');
var Transaction = require('../models/transaction');

//get list of transactions
router.get('/', function(req, res) {
  Transaction.find(function(err, transactions) {
    if (err) {
      res.json({ err: err, message: 'Something wrong - where are the transactions!' });
    } else {
      res.json(transactions);
    }

  })
});



module.exports = router