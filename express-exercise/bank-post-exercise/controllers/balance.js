const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/data.json");
const db = low(adapter);

const balance = (req, res) => {
	const user = db.get("users").find({ token: res.locals.token }).value();
	if (res.locals.token == user.token)
		res.status(200).send(`Your balance is: ${user.amount}`);
};
module.exports = balance;
