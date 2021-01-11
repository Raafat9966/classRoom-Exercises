const path = require("path");
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
	if (request.url === "/keyboard") {
		let keyboard = fs.readFileSync(path.join(__dirname, "keyboard.txt"));
		response.statusCode = 200;
		response.setHeader("Content-Type", "text/plain");
		response.end(keyboard);
	}
	if (request.url === "/blog") {
		response.statusCode = 200;
		response.setHeader("Content-Type", "text/html");
		response.end("<h1>This is my blog</h1>");
	} else {
		response.statusCode = 404;
		response.setHeader("Content-Type", "text/html");
		response.end(`<h1>This page is not here ${response.statusCode}</h1>`);
	}
});
const port = 5000;

server.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
