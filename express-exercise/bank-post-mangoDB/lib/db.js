const mongoose = require("mongoose");
// require("dotenv").config();

mongoose
	.connect(process.env.MONGODB_URI, {
		useCreateIndex: true,
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log("connected to mongoDB"))
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});
