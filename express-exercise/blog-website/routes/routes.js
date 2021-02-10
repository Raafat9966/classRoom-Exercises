const router = require("express").Router();
const db = require("../models/db");
const userDB = require("../models/user");

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

	router.get("/contact", (req, res) => res.status(200).render("contact"));

	router.get("/login", (req, res) => res.status(200).render("login"));

	router.get("/register", (req, res) => res.status(200).render("register"));

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

	router.post("/register", (req, res) => {
		let { first_name, last_name, email, password } = req.body;
		userDB
			.registerUser(first_name, last_name, email, password)
			.then((result) => {
				res.send("you are register");
			})
			.catch((err) => {
				if (err.code === 11000) res.send("this email has been used");
				else res.send(err.message);
			});
	});

	return router;
};
