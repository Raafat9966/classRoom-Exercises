const textFormatter = require("./formatting");
const showHelp = require("./messaging");

let Args = process.argv.slice(2);
//console.log(Args);
const options = (arguments) => {
	if (arguments.includes("--help")) {
		return showHelp();
	}
	return textFormatter("   hi   will     !   ");
};
console.log(options(Args));
