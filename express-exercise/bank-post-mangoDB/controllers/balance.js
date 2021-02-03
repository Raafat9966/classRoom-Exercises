const Accounts = require("../models/Accounts");

const balance = (req, res) => {
	Accounts.getAccount(req.params.pin).then((result) =>
		res.status(200).json(result[0].balance)
	);

	// res.status(200).send(`Your balance is: ${user.amount}`);
};
module.exports = balance;
