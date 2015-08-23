var mongoose = require('mongoose');

var Product = mongoose.model('Product');

var productSchema = new mongoose.Schema({
	name: String,
	image: String,
	quantity: String,
	bestBefore: String,
	available: Boolean,
	userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;