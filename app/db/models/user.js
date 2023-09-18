const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { validateEmail } = require('../validators');

const userSchema = new Schema({
	email: {
		type: String,
		required: [true, 'Email jest wymagany'],
		lowercase: true,
		trim: true,
		unique: [true, 'Ten adres email jest już zajęty'],
		validate: [validateEmail, 'Email nie prawidłowy'],
	},

	password: {
		type: String,
		requited: true,
		minLength: [4, 'Hasło powinno posiadać minimum 4 znaki'],
	},
});

const User = mongoose.model('User', userSchema);
module.exports = User;
