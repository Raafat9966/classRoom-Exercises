// !Sort the numbers in reverse order
// let numbers = [100, 22, 42, 1, -34];
// numbers.reverse();
// console.log(numbers);
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// !Sort the persons by their last name
// let persons = [
// 	"Albert Einstein",
// 	"Lise Meitner",
// 	"Gene Simmons",
// 	"Patrick Swayze",
// 	"Alice Cooper",
// 	"Ronny James Dio",
// 	"Bruce Dickinson",
// 	"Marcus Miller",
// 	"Nathan East",
// 	"Al di Meola",
// 	"Gloria Estefan",
// 	"Naima Husseini",
// 	"Alin Coen",
// 	"Tina Dico",
// ];

// function lastNameSort(a, b) {
// 	return a.split(" ").pop() > b.split(" ").pop() ? 1 : -1;
// }
// persons.sort(lastNameSort);
// console.log(persons);

// function compare(a, b) {
// 	var splitA = a.split(" ");
// 	var splitB = b.split(" ");
// 	var lastA = splitA[splitA.length - 1];
// 	var lastB = splitB[splitB.length - 1];
// 	if (lastA < lastB) return -1;
// 	if (lastA > lastB) return 1;
// 	return 0;
// }
// persons.sort(compare);
// console.log(persons);

// !String sorting
// let fruits = ["Banana", "Orange", "apple", "Mango", "Strawberry", "raspberry"];
// const sortingEqually = (a, b) => {
// 	return a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1;
// };
// console.log(fruits.sort(sortingEqually));

// !Flattening
// let arrays = [[1, 2, 3], [4, 5], [6]];
// let array = arrays.reduce((a, b) => a.concat(b));
// console.log(array);

// !Your own Loop
// const loop = (value, testFunction, updateFunction, bodyFunction) => {
// 	if (!testFunction(value)) return;
// 	bodyFunction(value);
// 	value = updateFunction(value);
// };
// const loopWithinLoop = (value, testFunction, updateFunction, bodyFunction) => {
// 	for (value; testFunction(value); value = updateFunction(value)) {
// 		bodyFunction(value);
// 	}
// };

// loopWithinLoop(
// 	3,
// 	(n) => n > 0,
// 	(n) => n - 1,
// 	console.log
// );

// !Everything
// const testingFunc = (array, test) => {
// 	for (let index = 0; index < array.length; index++) {
// 		if (!test(array[index])) {
// 			return false;
// 		}
// 	}
// 	return true;
// };
// console.log(testingFunc([1, 3, 5], (n) => n < 10));
// console.log(testingFunc([1, 3, 15], (n) => n < 10));
// console.log(testingFunc([], (n) => n < 10));

// console.log([1, 3, 5].every((n) => n < 10));
// console.log([2, 4, 16].every((n) => n < 10));
// console.log([].every((n) => n < 10));

// !Dominant Writing Direction
// require("./SCRIPTS.js");

// function characterScript(code) {
// 	for (let script of SCRIPTS) {
// 		if (script.ranges.some(([from, to]) => code >= from && code < to)) {
// 			return script;
// 		}
// 	}
// 	return null;
// }

// function countBy(items, groupName) {
// 	let counts = [];
// 	for (let item of items) {
// 		let name = groupName(item);
// 		let known = counts.findIndex((c) => c.name == name);
// 		if (known == -1) {
// 			counts.push({ name, count: 1 });
// 		} else {
// 			counts[known].count++;
// 		}
// 	}
// 	return counts;
// }

// function dominantDirection(text) {
// 	let scripts = countBy(text, (char) => {
// 		let script = characterScript(char.codePointAt(0));
// 		return script ? script.direction : "none";
// 	}).filter(({ name }) => name != "none");
// 	switch (scripts.length) {
// 		case 0:
// 			return "no dominant direction found";
// 		case 1:
// 			return scripts[0].name;
// 		default:
// 			if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
// 				return "no dominant direction found";
// 			} else {
// 				return scripts.reduce((acc, cur) =>
// 					acc.count >= cur.count ? acc.name : cur.name
// 				);
// 			}
// 	}
// }

// console.log(dominantDirection("Hello!"));

// console.log(dominantDirection("Hey, مساء الخير"));

// console.log(dominantDirection(""));

// console.log(dominantDirection("Heyخير"));
