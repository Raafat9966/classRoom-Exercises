const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/data.json");
const db = low(adapter);

const withdraw = (req, res) => {
	const user = db.get("user").find({ token: res.locals.token }).value();

	db.get("user")
		.find({ token: res.locals.token })
		.set("amount", user.amount - +res.locals.amount)
		.write();
	res.status(200).send(
		`The money has been added, the token is: ${req.body.token} and the new balance: ${user.amount}`
	);
};
module.exports = withdraw;
