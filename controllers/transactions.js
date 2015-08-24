var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Product = require('../models/product');
var Transaction = require('../models/transaction');

//get list of transactions - working
router.get('/', function(req, res) {
  Transaction.find(function(err, transactions) {
    if (err) {
      res.json({ err: err, message: 'Something wrong - where are the transactions!' });
    } else {
      res.json(transactions);
    }

  })
});

//find a single transaction - working
router.get('/:transaction_id', function(req, res){
  Transaction.findById(req.params.transaction_id, function(err, user) {
    if (err) {
      res.send(err);
    }
    console.log('transaction id ' + req.params.transaction_id + 'received');
    res.json(transaction);
  });
});

// create new transaction - WORKING
router.post('/', function(req, res, next) {
  var transaction = new Transaction(req.body)

  transaction.save(function(err) {
    if (err) {
      res.send(err)
    } 
    console.log('Transaction added!');
    res.json(transaction);
  });

});

// delete a transaction
router.delete('/:transaction_id', function(req, res, next) {

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