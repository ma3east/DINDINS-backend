var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var productSchema = new mongoose.Schema({

})
var Product = mongoose.model('Product', productSchema);
module.exports = Product;