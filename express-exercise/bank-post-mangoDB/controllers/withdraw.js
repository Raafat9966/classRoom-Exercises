const withdraw = (req, res) => {
	res.status(200).send(
		`The money has been added, the new balance: ${user.amount}`
	);
};
module.exports = withdraw;
