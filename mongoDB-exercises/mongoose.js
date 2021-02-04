require("dotenv").config();
const mongoose = require("mongoose");

let uri = process.env.MONGODB_URI;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("database connected");
		const productSchema = new mongoose.Schema({
			articleNo: {
				type: String,
				required: true,
				unique: true,
			},
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
		});

		const Product = mongoose.connection.model("products", productSchema);

		Product.find()
			.then((result) => {
				console.log(result);
				process.exit(0);
			})
			.catch((error) => console.log(error));
	})
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});
