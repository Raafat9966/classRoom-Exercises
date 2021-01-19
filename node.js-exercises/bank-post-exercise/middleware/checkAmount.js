var createError = require("http-errors");

const checkAmount = (req, res, next) => {
	if (!res.locals.amount) {
		return next(createError(400, "Transfer failed, check the amount"));

		//return res.status(400).send(`Transfer failed, check the amount`);
	}

	next();
};
module.exports = checkAmount;
