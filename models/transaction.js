var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionSchema = new mongoose.Schema({
	giverId: { type: Schema.Types.ObjectId, ref: 'User' },
	takerId: { type: Schema.Types.ObjectId, ref: 'User' },
	products: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
	availableTime: [Date],
	meetingTime: Date,
	location: String,
	status: String,
	rating: Number,
	lng: Number,
	lat:Number
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;