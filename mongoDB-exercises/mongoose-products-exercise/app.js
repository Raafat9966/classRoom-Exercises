const express = require("express");
const router = require("./routes/router");
require("dotenv").config();
const app = express();

const cors = require("cors");
let options = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
};

port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", cors(options), router);

app.listen(port, () => console.log(`http://localhost:${port}`));
