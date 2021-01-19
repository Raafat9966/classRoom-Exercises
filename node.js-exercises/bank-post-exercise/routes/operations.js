const router = require("express").Router();
const transfer = require("../controllers/transfer");
const withdraw = require("../controllers/withdraw");
const balance = require("../controllers/balance");
const checkAmount = require("../middleware/checkAmount");

module.exports = () => {
	router.post("/transfer", checkAmount, transfer);
	router.post("/withdraw", checkAmount, withdraw);
	router.post("/balance", balance);
	return router;
};
