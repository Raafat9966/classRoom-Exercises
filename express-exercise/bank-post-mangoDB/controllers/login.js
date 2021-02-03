const Accounts = require("../models/Accounts");

const login = (req, res) => {
	let IBAN = req.body.IBAN;
	let pin = req.body.pin;
	let balance = req.body.balance;

	// if (Accounts.getAccount(IBAN)) {
	// 	res.status(400).send(`the user already exited, try to login!!!`);
	// } else {
	Accounts.addAccount(IBAN, pin, balance).then((result) => res.json(result));
	// }
};

module.exports = login;
