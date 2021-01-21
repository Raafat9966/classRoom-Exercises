const express = require("express");
const bodyParser = require("body-parser");
const login = require("./controllers/login");
const checkToken = require("./middleware/checkToken");
const userToken = require("./middleware/checkUserToken");
const operations = require("./routes/operations");

let app = express();
let port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res) => {
	res.status(404).send("404 - Page not Found");
});

app.post("/login", login);
app.use("/", checkToken, userToken, operations());

app.listen(port, () => console.log(`Server run on: http://localhost:${port}`));
