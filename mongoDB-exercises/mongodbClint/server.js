const { MongoClient } = require("mongodb");

let uri = process.env.MONGODB_URI;

const readDB = (req, res, next) => {
	MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
		if (err) throw err;
		var db = client.db("realm-exercise");

		db.collection("items")
			.find({ x: 135 })
			.toArray((err, result) => {
				if (err) throw err;
				//res.locals.result = JSON.stringify(result);
				console.log(result);
			});
	});
	next();
};

const deleteDB = (req, res, next) => {
	MongoClient.connect(uri, (err, client) => {
		if (err) throw err;
		var db = client.db("realm-exercise");

		db.collection("items").deleteMany({ x: 580 }),
			(err, result) => {
				if (err) throw err;

				console.log(result);
			};
	});
	next();
};

const updateDB = (req, res, next) => {
	MongoClient.connect(uri, (err, client) => {
		if (err) throw err;
		var db = client.db("realm-exercise");

		db.collection("items").updateMany({ x: 135 }, { $set: { y: 10 } }),
			(err, result) => {
				if (err) throw err;

				console.log(result);
			};
	});
	next();
};

module.exports = {
	readDB,
	deleteDB,
	updateDB,
};
