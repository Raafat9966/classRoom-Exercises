const express = require("express");
require("dotenv").config();
const mongodb = require("./server");
const app = express();

let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", mongodb.readDB, (req, res) => {
	res.status(200).send("working");
});

app.get("/delete", mongodb.deleteDB, (req, res) => {
	res.status(200).send("deleted item");
});
app.get("/update", mongodb.updateDB, (req, res) => {
	res.status(200).send("updated item");
});

app.listen(port, () => console.log(`http://localhost:${port}`));
