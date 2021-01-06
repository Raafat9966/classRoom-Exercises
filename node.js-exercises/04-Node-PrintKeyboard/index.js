const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname, "keyboard.txt"), "utf-8", (err, data) => {
// 	if (err) console.error(err);
// 	console.log(data);
// });

console.log(fs.readFileSync(path.join(__dirname, "keyboard.txt"), "utf-8"));
