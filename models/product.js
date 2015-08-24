var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
	addedBy: { type: Schema.Types.ObjectId, ref:'User'},
	name: { type: String, required: true },
	image: { type: String, required: true },
	quantity: { type: String, required: true },
	bestBefore: Date,
	available: Boolean
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;