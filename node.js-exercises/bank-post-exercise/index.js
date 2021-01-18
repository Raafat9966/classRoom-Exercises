const express = require("express");
const bodyParser = require("body-parser");
const login = require("./controllers/login");
const transfer = require("./controllers/transfer");
const withdraw = require("./controllers/withdraw");
const balance = require("./controllers/balance");

let port = 5000;
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", login);

app.post("/transfer", transfer);

app.post("/withdraw", withdraw);

app.post("/balance", balance);

app.listen(port, () => console.log(`Server run on: http://localhost/${port}`));
