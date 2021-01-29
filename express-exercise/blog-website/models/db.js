const mongoose = require("mongoose");

const connectionString = "";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
	name: {
		required: true,
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
	comment: {
		type: String,
		required: true,
	},
	commentDate: {
		type: Date,
		required: true,
	},
});

const Blog = mongoose.model("blogs", blogSchema);

function connect() {
	return new Promise((resolve, reject) => {
		if (mongoose.connection.readyState === 1) {
			resolve();
		} else {
			mongoose
				.connect(connectionString, {
					useUnifiedTopology: true,
					useCreateIndex: true,
					useNewUrlParser: true,
				})
				.then(() => {
					resolve();
				})
				.catch((error) => reject(error));
		}
	});
}
/**
 *
 * @param {String} name
 * @param {String} email
 * @param {String} comment
 * @param {Date} commentDate
 */
function addBlog(name, email, comment, commentDate) {
	return new Promise((resolve, reject) => {
		connect()
			.then(() => {
				const newBlog = new Blog({
					name,
					email,
					comment,
					commentDate,
				});
				newBlog
					.save()
					.then((result) => {
						// console.log(result);
						resolve();
					})
					.catch((error) => reject(error));
			})
			.catch((error) => reject(error));
	});
}

function getBlog() {
	return new Promise((resolve, reject) => {
		connect()
			.then(() => {
				Blog.find()
					.then((blogs) => {
						//console.log(blogs);
						resolve(blogs);
					})
					.catch((error) => reject(error));
			})
			.catch((error) => reject(error));
	});
}

module.exports = {
	addBlog,
	getBlog,
};
