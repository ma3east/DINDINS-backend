var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionSchema = new mongoose.Schema({
	giverId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	takerId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	availableTime: { type: String, required: true },
	meetingTime: { type: Date, required: true },
	location: String,
	status: Boolean,
	rating: Number
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;