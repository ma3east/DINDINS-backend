var mongoose = require('mongoose');
var Transaction = mongoose.model('Transaction');
var transactionSchema = new mongoose.Schema({

})
var Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;