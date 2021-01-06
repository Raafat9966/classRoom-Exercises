const fs = require("fs");
const path = require("path");
const os = require("os");

//! node path
// console.log(path.basename(path.dirname(__filename)));
// console.log(path.basename(__dirname));
//console.log(path.parse(__filename));

//! node file system
// const content = "Node.js File System Module";

// fs.writeFile("new.txt", content, (err) => {
// 	if (err) throw err;
// });

// fs.readFile("new.txt", "utf-8", (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// fs.rename("./new.txt", "old.txt", (err) => {
// 	if (err) console.log(err);
// });

// const newContent =
// 	" A handy method to append content to the end of a file is fs.appendFile() (and its fs.appendFileSync() counterpart)";

// fs.appendFile("old.txt", newContent, (err) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	console.log("done");
// });
// fs.mkdir("./newDir", (err) => {
// 	if (err) console.error(err);
// });
// fs.rmdir("./newDir", (err) => {
// 	if (err) console.error(err);
// });

// fs.readdir("./", { withFileTypes: true }, (err, data) => {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}

// 	data.forEach((file) => {
// 		const type = file.isDirectory() ? "📂" : "📄";
// 		console.log(type, file.name);
// 	});
// });

// fs.stat("./subDir", function (err, stats) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log(stats);
// 	console.log("Got file info successfully!");

// 	// Check file type
// 	console.log("isFile ? " + stats.isFile());
// 	console.log("isDirectory ? " + stats.isDirectory());
// });

// fs.unlink("old.txt", function (err) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log("File deleted successfully!");
// });

//! node operating system
// console.log(os.platform());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log(os.cpus()[0].model);
// console.log(os.tmpdir());
// console.log(os.version());
