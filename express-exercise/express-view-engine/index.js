const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.use(express.static(__dirname + "/public"));

app.get("/aboutus/:userQuery", (req, res) => {
	res.render("aboutus", {
		data: {
			userQuery: req.params.userQuery,
			userName: "header",
		},
	});
});

const user = {
	real: false,
	title: "This Page Title",
	name: "Raafat",
	hobbies: ["guitar", "video games", "basketball"],
	page: "<p>this will be <em> big </em> line</p>",
};
app.get("/", (req, res) => {
	res.render("index", user);
});

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
