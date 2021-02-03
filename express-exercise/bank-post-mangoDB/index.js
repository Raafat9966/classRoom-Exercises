const express = require("express");
const bodyParser = require("body-parser");
const login = require("./controllers/login");
//const checkToken = require("./middleware/checkToken");
//const userToken = require("./middleware/checkUserToken");
const operations = require("./routes/operations");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// * creating MONGODB
require("./lib/db");

let app = express();
let port = process.env.PORT || 8080;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/test", (req, res) => {
	res.status(200).send("it is just test");
});

app.post("/login", login);
// app.use("/", checkToken, userToken, operations());
app.use("/", operations());

app.use((req, res) => {
	res.status(404).send("404 - Page not Found");
});

app.listen(port, () => console.log(`Server run on: http://localhost:${port}`));
