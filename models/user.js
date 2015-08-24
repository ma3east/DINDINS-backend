var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	email: { type: String, required: true, index: { unique: true } },
	location: String,
	password: { type: String, required: true }
})

var User = mongoose.model('User', userSchema);

module.exports = User;