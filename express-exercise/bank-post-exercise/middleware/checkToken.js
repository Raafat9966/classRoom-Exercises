const checkToken = (req, res, next) => {
	let token = req.cookies.token;
	console.log(token);
	// let amount = req.body.amount;
	if (!token)
		return res.status(400).send(`Transfer failed, check your token`);
	res.locals = {};
	// res.locals.amount = amount;
	res.locals.token = token;
	next();
};
module.exports = checkToken;
