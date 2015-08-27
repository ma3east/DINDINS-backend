var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionSchema = new mongoose.Schema({
	giverId: { type: Schema.Types.ObjectId, ref: 'User' },
	takerId: { type: Schema.Types.ObjectId, ref: 'User' },
	products: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
	availableTime: String,
	meetingTime: Date,
	location: String,
	status: String,
	rating: Number
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;