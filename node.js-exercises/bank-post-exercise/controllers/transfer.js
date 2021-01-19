const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/data.json");
const db = low(adapter);

const transfer = (req, res) => {
	const user = db.get("user").find({ token: res.locals.token }).value();

	db.get("user")
		.find({ token: res.locals.token })
		.set("amount", +res.locals.amount + user.amount)
		.write();
	res.status(200).send(
		`The money has been added, the token is: ${req.body.token} and the new balance: ${user.amount}`
	);
};
module.exports = transfer;
