var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	email: { type: String, required: true, index: { unique: true } },
	location: String,
	password: { type: String, required: true }
})

UserSchema.set('toJSON', {
	transform: function(don, ret, options) {
		var returnJson = {
			id: ret._id,
			username: ret.username,
		};
		return returnJson
	}
});

var User = mongoose.model('User', userSchema);

module.exports = User;