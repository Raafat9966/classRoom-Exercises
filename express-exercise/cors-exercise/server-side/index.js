const express = require("express");
const cors = require("cors");
const path = require("path");

let app = express();

// app.use(cors());

let options = {
	origin: "http://localhost:5000",
	optionsSuccessStatus: 200,
};
app.get("/api/user", cors(options), (req, res) => {
	res.status(200).sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () =>
	console.log(`CORS server running on http://localhost:3000`)
);
