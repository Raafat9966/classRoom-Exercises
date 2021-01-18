const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/data.json");
const db = low(adapter);

const transfer = (req, res) => {
	let token = req.body.token;
	let amount = req.body.amount;
	const user = db.get("user").find({ token }).value();
	if (user.token == token) {
		db.get("user")
			.find({ token })
			.set("amount", +amount + user.amount)
			.write();
		res.status(200).send(
			`The money has been added, the token is: ${req.body.token} and the new balance: ${user.amount}`
		);
	} else res.status(400).send(`Transfer failed ${req.body.token}`);
};
module.exports = transfer;
