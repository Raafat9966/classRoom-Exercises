var createError = require("http-errors");

const checkAmount = (req, res, next) => {
	if (!req.body.amount) {
		return next(createError(400, "Transfer failed, check the amount"));

		//return res.status(400).send(`Transfer failed, check the amount`);
	}
	res.locals.amount = req.body.amount;
	next();
};
module.exports = checkAmount;
