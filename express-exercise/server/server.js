const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

let port = 5000;
const app = express();

// app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) =>
	res.status(200).sendFile(path.join(__dirname, "public", "index.html"))
);
app.get("/message", (req, res) =>
	res.status(200).sendFile(path.join(__dirname, "public", "message.html"))
);
app.get("/about", (req, res) =>
	res.status(200).sendFile(path.join(__dirname, "public", "about.html"))
);

// app.get("/about", (req, res) =>
// 	res.status(200).send(`<h1>Hello in the About page</h1>`)
// );

app.get("/me", (req, res) =>
	res.status(200).send(`<h1>Live free or Die hard</h1>`)
);

app.post("/login", (req, res) => {
	// console.log(req.body);

	if (req.body.username == "admin" && req.body.password == "secret") {
		res.status(200).send(" Hi Boss!");
	} else {
		res.status(200).send(" I do not know you!!!");
	}
});

app.listen(port, () =>
	console.log(`Server running on host: http://localhost:${port}`)
);
