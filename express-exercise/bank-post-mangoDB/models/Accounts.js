const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
	IBAN: {
		type: String,
		required: true,
	},
	pin: {
		type: Number,
		required: true,
	},
	balance: {
		type: Number,
		required: true,
	},
});

const Account = mongoose.connection.model("accounts", accountSchema);

const addAccount = (IBAN, pin, balance) => {
	return new Promise((res, rej) => {
		const newAccount = new Account({
			IBAN,
			pin,
			balance,
		});
		newAccount
			.save()
			.then((result) => res(result))
			.catch((err) => rej(err));
	});
};

const getAccount = (pin) => {
	return new Promise((res, rej) => {
		Account.find({ pin })
			.then((result) => res(result))
			.catch((err) => rej(err));
	});
};

module.exports = {
	addAccount,
	getAccount,
};
