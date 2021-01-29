const router = require("express").Router();
const db = require("../models/db");

module.exports = () => {
	router.get("/", (req, res) => res.status(200).render("index"));

	router.get("/about", (req, res) => res.status(200).render("about"));

	router.get("/blog", (req, res) => {
		db.getBlog()
			.then((blogs) => {
				res.status(200).render("blog", { blogs });
			})
			.catch((error) => res.render("blog", { blogs: [] }));
	});

	router.get("/contact", (req, res) => {
		res.status(200).render("contact");
	});

	router.get("/marketing", (req, res) => res.status(200).render("marketing"));

	router.post("/blog", (req, res) => {
		db.addBlog(req.body.name, req.body.email, req.body.comment, Date.now())
			.then(() => {
				db.getBlog()
					.then((blogs) => {
						res.status(200).render("blog", { blogs });
					})
					.catch((error) => res.render("blog", { blogs: [] }));
			})
			.catch((error) => res.send(`there is a problem ${error}`));
	});
	return router;
};
