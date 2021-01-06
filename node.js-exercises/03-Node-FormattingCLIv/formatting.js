const textFormatter = (text) => {
	let string = text
		.split(" ")
		.filter((word) => !word == "")
		.join(" ")
		.replace(/[^a-zA-Z ]/g, "");
	return capitalizeInitial(string);
};

const capitalizeInitial = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

module.exports = textFormatter;
