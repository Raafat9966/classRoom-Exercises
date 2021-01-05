const printHeader = (stars = 10, words = "Hello") => {
	console.log(`${"*".repeat(stars)}\n ${words}\n${"*".repeat(stars)}`);
};
module.exports = printHeader;
