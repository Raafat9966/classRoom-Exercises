const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/data.json");
const db = low(adapter);

const balance = (req, res) => {
	let token = req.body.token;
	const user = db.get("user").find({ token }).value();
	if (token == user.token)
		res.status(200).send(`Your balance is: ${user.amount}`);
	else res.status(400).send(`Your token is incorrect`);
};
module.exports = balance;
