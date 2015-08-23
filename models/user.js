var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	email: String,
	location: String
})

var User = mongoose.model('User', userSchema);

module.exports = User;