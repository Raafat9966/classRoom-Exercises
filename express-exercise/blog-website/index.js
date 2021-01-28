const express = require("express");
const path = require("path");
const router = require("./routes/routes");
const app = express();
require("dotenv").config();
// const urlMiddleware = require("./middleware/urlMiddleware");

const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", router());

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
