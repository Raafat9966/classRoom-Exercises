const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

let port = 5000;
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/authentication", (req, res) => {
	let balance = 1000;
	let token = "";
	if (req.body.IBAN === "DE000000000" && req.body.picode === "1234") {
		token = uuidv4();
		res.status(200).send({ account: req.body, token: token });
	}
	console.log(token);

	const transferMoney = (() => {
		app.post("/transfer", (req, res) => {
			if (req.body.token === token) {
				balance += parseInt(req.body.amount);
				res.status(200).send(
					`The money has been added, the token is: ${req.body.token} and the new balance: ${balance}`
				);
			}
		});
	})();

	const withdrawMoney = (() => {
		app.post("/withdraw", (req, res) => {
			if (req.body.amount <= balance && req.body.token === token) {
				balance -= parseInt(req.body.amount);
				res.status(200).send(
					`The money has been payed, the new balance: ${balance}`
				);
			} else res.status(400).send(`You can't make this transaction`);
		});
	})();

	const accountBalance = (() => {
		app.post("/balance", (req, res) => {
			if (req.body.token === token)
				res.status(200).send(`Your balance is: ${balance}`);
			else res.status(400).send(`Your token is incorrect`);
		});
	})();
});

app.listen(port, () => console.log(`Server run on: http://localhost/${port}`));
