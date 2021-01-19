const { v4: uuidv4 } = require("uuid");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/data.json");
const db = low(adapter);

const login = (req, res) => {
	let IBAN = req.body.IBAN;
	let pin = req.body.pin;
	const user = db.get("users").find({ IBAN }).value();
	if (IBAN && pin) {
		if (user)
			res.status(400).send(`the user already exited, try to login!!!`);
		else {
			let token = uuidv4();
			res.status(200).send({ account: req.body, token: token });
			db.get("users")
				.push({ IBAN: IBAN, pin: pin, token: token, amount: 1000 })
				.write();
		}
	} else res.status(400).send(`invalid input try again!!!`);
};
module.exports = login;
