var mongoose = require('mongoose');

var Product = mongoose.model('Product');

var productSchema = new mongoose.Schema({
	name: String,
	image: String,
	quantity: String,
	bestBefore: Date,
	available: Boolean,
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;