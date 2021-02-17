import sha256 from "crypto-js/sha256.js";

const password = "myStrongPassword";

const hash = sha256(password).toString();

console.log(hash);

// ------------------------------

const passwords = [
	{ password: "a" },
	{ password: "aa" },
	{ password: "aaa" },
	{ password: "aaaa" },
	{ password: "myStrongPassword" },
	{ password: "myStrongPassword" },
];

const dictionary = passwords.map((word) => {
	let salt = Math.random();
	return {
		...word,
		salt,
		hash: sha256(word.password + salt).toString(),
	};
});

console.log(dictionary);
