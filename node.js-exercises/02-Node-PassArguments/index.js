const printHeader = require("./stars");

let Args = process.argv.slice(2);
printHeader(Args[0], Args[1]);
