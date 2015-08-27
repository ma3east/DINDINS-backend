var express = require('express');
var router = express.Router();
var geocoderProvider = 'google';
var httpAdapter = 'https';
var key = process.env.GOOGLE_GEOCODER_API;
var extra = {
  apiKey: key,
  formatter: null
}
var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);


var User = require('../models/user');
var Product = require('../models/product');
var Transaction = require('../models/transaction');

//get list of transactions - WORKING
router.get('/', function(req, res) {
  Transaction.find().populate('giverId takerId products').exec(function(err, transactions) {
    if (err) {
      res.json({ err: err, message: 'Something wrong - where are the transactions!' });
    } else {
      res.json(transactions);
    }
  })
});

//find a single transaction  - WORKING
router.get('/:transaction_id', function(req, res){
  Transaction.findById(req.params.transaction_id).populate('giverId takerId products').exec(function(err, transaction) {
    if (err) {
      res.send(err);
    }
    console.log('transaction id ' + req.params.transaction_id + 'received');
    res.json(transaction);
  });
});

// create new transaction - WORKING
router.post('/', function(req, res) {
  var transaction = new Transaction(req.body)

  transaction.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
    } 
    console.log('Transaction added!');
    res.json(transaction);
  });
});


// update a transaction - WORKING

router.put('/:transaction_id', function(req, res) {
  Transaction.findByIdAndUpdate(req.params.transaction_id, req.body, function(err, transaction) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(transaction);
    }
  });
})

// delete a transaction - WORKING
router.delete('/:transaction_id', function(req, res) {

  Transaction.findByIdAndRemove(req.params.transaction_id, function(err, transaction) {
    if (err) {
      res.json(err);
      console.log("There was an error, deleting the transaction, please check the request.");
      
    } else {
      console.log('Transaction has been deleted');
      res.json({ message: 'Transaction has been deleted - Yah!' } );
    }
  });
});


module.exports = router