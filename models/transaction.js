var mongoose = require('mongoose');

var Transaction = mongoose.model('Transaction');

var transactionSchema = new mongoose.Schema({
	giverId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	takerId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	availableTime: String,
	meetingTime: Date,
	location: String,
	status: Boolean,
	rating: Number
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;