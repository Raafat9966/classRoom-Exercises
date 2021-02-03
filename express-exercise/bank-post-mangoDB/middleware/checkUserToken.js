const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const jwt = require("jsonwebtoken");

const adapter = new FileSync("./database/data.json");
const db = low(adapter);

const userToken = (req, res, next) => {
	const user = db.get("users").find({ token: res.locals.token }).value();
	const payload = jwt.verify(res.locals.token, "secret");
	console.log(payload);
	if (!user) return res.status(400).send(`The token is invalid, try again`);
	next();
};
module.exports = userToken;
