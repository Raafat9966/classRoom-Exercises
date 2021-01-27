const urlMiddleware = (req, res, next) => {
	// console.log(req.url);
	res.status(200).render(req.url.substring(1), { pageName: req.url });
	next();
};
module.exports = urlMiddleware;
