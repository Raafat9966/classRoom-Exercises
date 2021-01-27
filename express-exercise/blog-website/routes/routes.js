const router = require("express").Router();

module.exports = () => {
	router.get("/", (req, res) => res.status(200).render("index"));

	router.get("/about", (req, res) => res.status(200).render("about"));
	router.get("/blog", (req, res) => res.status(200).render("blog"));
	router.get("/contact", (req, res) => res.status(200).render("contact"));
	router.get("/marketing", (req, res) =>
		res.status(200).render("marketing", { pageName: "marketing" })
	);
	return router;
};
