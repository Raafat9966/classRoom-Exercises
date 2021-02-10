const mongoose = require("mongoose");
require("dotenv").config();
const db = require("./db");
const bcrypt = require("bcrypt");

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
				bcrypt.hash(password, 10, function (err, hash) {
					if (err) rej(err);
					else {
						const newUser = new User({
							first_name,
							last_name,
							email,
							password: hash,
						});
						newUser
							.save()
							.then((result) => {
								// console.log(result);
								res(result);
							})
							.catch((error) => rej(error));
					}
				});
			})
			.catch((err) => rej(err));
	});
};

const checkUser = (first_name, password) => {
	return new Promise((res, rej) => {
		db.connect()
			.then(() => {
				User.findOne({ first_name })
					.then((result) => {
						if (!result) {
							rej("user is not exist");
						} else {
							bcrypt
								.compare(password, result.password)
								.then((data) => {
									if (data) res();
									else rej("the password doesn't match");
								})
								.catch((err) => {
									rej(err);
								});
						}
					})
					.catch((err) => {
						rej(err);
					});
			})
			.catch((err) => rej(err));
	});
};

module.exports = {
	registerUser,
	checkUser,
};
