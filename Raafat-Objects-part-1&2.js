// !Objects: Part 1
// const person = {
// 	name: "human",
// 	age: 55,
// 	mission: "driver",
// 	ID: 0110100001110101011011010110000101101110,
// 	get printValue() {
// 		console.log(
// 			`${this.name} is ${this.age} work as ${this.mission} has ID: ${this.ID}.`
// 		);
// 	},
// };
// // old way
// (function loopPerson() {
// 	for (var key in person) {
// 		if (person.hasOwnProperty(key)) {
// 			console.log(`${key}: ${person[key]}.`);
// 		}
// 	}
// })();
// // new way
// (function printPerson() {
// 	for (let [key, value] of Object.entries(person)) {
// 		console.log(`${key}: ${value}`);
// 	}
// })();
// (function printValues() {
// 	console.log(Object.values(person));
// })();
// (function printKeys() {
// 	console.log(Object.keys(person));
// })();
// // const printPerson = () => console.log(person);
// // printPerson();
// person.printValue;
// (function arrayPerson() {
// 	console.log(Object.entries(person));
// })();

// !3. Merge.
// let first = { firstName: "John" };
// let last = { lastName: "Smith" };
// const total = (objOne, objTwo) => {
// 	return { ...objOne, ...objTwo };
// };
// console.log(total(first, last));

// !Switch Keys and Values.
// (function printPerson() {
// 	for (let [key, value] of Object.entries(person)) {
// 		console.log(`${value}: ${key}`);
// 	}
// })();

// !Return Keys and Values
// function separate(obj) {
// 	return [Object.keys(obj), Object.values(obj)];
// }
// console.log(separate({ a: 1, b: 2, c: 3 }));
//
// !Objects: Part 2
// const withinRange = (number, obj) => {
// 	if (number >= obj.min && number <= obj.max) return true;
// 	else return false;
// };
// console.log(withinRange(8, { min: 0, max: 5 }));
// console.log(withinRange(8, { min: 2, max: 10 }));

// !Scrabble
// const scrabble = (obj) => {
// 	return obj.map((a) => a.score).reduce((a, b) => a + b);
// };

// console.log(
// 	scrabble([
// 		{ tile: "N", score: 1 },
// 		{ tile: "K", score: 5 },
// 		{ tile: "Z", score: 10 },
// 		{ tile: "X", score: 8 },
// 		{ tile: "D", score: 2 },
// 		{ tile: "A", score: 1 },
// 		{ tile: "E", score: 1 },
// 	])
// );

// !Is it an empty object?
// const emptyObject = (obj) => (Object.keys(obj).length === 0 ? true : false);

// console.log(emptyObject({}));

// ! Counting Letters.
// Todo unfinished Function
// const countLetters = (str, callBack) => {
// 	let theObject = {};
// 	for (var i = 0; i < str.length; i++) {
// 		theObject = { [str[i]]: callBack(str, str[i]) };
// 	}
// 	return theObject;
// };

// const countLetters = (str, callBack) => {
// 	let theObject = {};
// 	return [...str].forEach((a) => {
// 		theObject = { [a]: callBack(str, a) };
// 		//let newArr = (...theObject);
// 		console.log(theObject);
// 	});
// };

// function stringCount(str, letter) {
// 	var letterCount = 0;
// 	for (var i = 0; i < str.length; i++) {
// 		if (str.charAt(i) == letter) {
// 			letterCount += 1;
// 		}
// 	}
// 	return letterCount;
// }
// console.log(countLetters("tree", stringCount));

// !Free Shipping.
// const freeShipping = (obj) => {
// 	return Object.values(obj).reduce((a, b) => a + b) > 50 ? true : false;
// };
// console.log(
// 	freeShipping({ Wool: 66.99, "Knitting Needles": 15.5, Bag: 13.99 })
// );

// !Programming Object
// const programming = {
// 	languages: ["JavaScript", "Python", "Ruby"],
// 	isChallenging: true,
// 	isRewarding: true,
// 	difficulty: 8,
// 	jokes:
// 		"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// 	get learnOrNot() {
// 		if (this.isChallenging && this.isRewarding)
// 			console.log(
// 				`Learning the programming languages: " ${this.languages[0]}, ${this.languages[1]}, ${this.languages[2]}, ${this.languages[3]} " is rewarding and challenging`
// 			);
// 	},
// };
// programming.languages.push("go");
// programming.difficulty = 7;
// delete programming.jokes;
// programming.isFun = true;
// console.log(programming);
// for (let index = 0; index < programming.languages.length; index++) {
// 	const element = programming.languages[index];
// 	console.log(element);
// }
// console.log(Object.keys(programming));
// console.log(Object.values(programming));
// programming.learnOrNot;
// Object.freeze(programming);
// console.log(`Is the Object Freezed: ${Object.isFrozen(programming)}`);
