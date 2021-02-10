const mongoose = require("mongoose");
require("dotenv").config();
const db = require("./db");

const connectionString = process.env.MONGODB_URI;

const Schema = mongoose.Schema;

const userSchema = new Schema({
	first_name: {
		required: true,
		type: String,
	},
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},

	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("users", userSchema);

/**
 *
 * @param {String} first_name
 * @param {String} last_name
 * @param {String} email
 * @param {String} password
 */
const registerUser = (first_name, last_name, email, password) => {
	return new Promise((res, rej) => {
		db.connect()
			.then(() => {
				const newUser = new User({
					first_name,
					last_name,
					email,
					password,
				});
				newUser
					.save()
					.then((result) => {
						// console.log(result);
						res(result);
					})
					.catch((error) => reject(error));
			})
			.catch((err) => rej(err));
	});
};

module.exports = {
	registerUser,
};
