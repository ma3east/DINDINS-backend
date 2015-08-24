var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	quantity: { type: String, required: true },
	bestBefore: { type: Date, required: true },
	available: Boolean
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;