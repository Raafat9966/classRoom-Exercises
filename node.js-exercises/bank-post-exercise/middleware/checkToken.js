const checkToken = (req, res, next) => {
	let token = req.body.token;
	let amount = req.body.amount;
	if (!token) res.status(400).send(`Transfer failed ${token}`);
	res.locals = {};
	res.locals.amount = amount;
	res.locals.token = token;
	next();
};
module.exports = checkToken;
