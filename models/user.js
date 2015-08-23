var mongoose = require('mongoose');
var User = mongoose.model('User');
var userSchema = new mongoose.Schema({

})
var User = mongoose.model('User', userSchema);
module.exports = User;