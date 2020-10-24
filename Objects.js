// !Permutations of String
// !try 1
// let findPermutations = (string) => {
// 	if (!string || typeof string !== "string") {
// 		return "Please enter a string";
// 	} else if (string.length < 2) {
// 		return string;
// 	}

// 	let permutationsArray = [];

// 	for (let i = 0; i < string.length; i++) {
// 		let char = string[i];

// 		if (string.indexOf(char) != i) continue;

// 		let remainingChars =
// 			string.slice(0, i) + string.slice(i + 1, string.length);
// 		console.log(remainingChars);
// 		for (let permutation of findPermutations(remainingChars)) {
// 			permutationsArray.push(char + permutation);
// 		}
// 	}
// 	return permutationsArray;
// };
// console.log(findPermutations("abc"));

// !try 2
// const stringPermutations = (str) => {
// 	if (str.length <= 2)
// 		return str.length === 2 ? [str, str[1] + str[0]] : [str];
// 	return str
// 		.split("")
// 		.reduce(
// 			(acc, letter, i) =>
// 				acc.concat(
// 					stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
// 						(val) => letter + val
// 					)
// 				),
// 			[]
// 		);
// };

// console.log(stringPermutations("abc"));

// !try 3
// function getAllPermutations(string) {
// 	var results = [];

// 	if (string.length === 1) {
// 		results.push(string);
// 		return results;
// 	}

// 	for (var i = 0; i < string.length; i++) {
// 		var firstChar = string[i];
// 		var charsLeft = string.substring(0, i) + string.substring(i + 1);
// 		var innerPermutations = getAllPermutations(charsLeft);
// 		for (var j = 0; j < innerPermutations.length; j++) {
// 			results.push(firstChar + innerPermutations[j]);
// 		}
// 	}
// 	return results;
// }
// console.log(getAllPermutations("abc"));

// !Volume of a Box
// const volumeOfBox = (obj) => {
// 	return Object.values(obj).reduce((a, b) => a * b);
// };
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));

// !Extract City Facts
// const cityFacts = (obj) =>
// 	`${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`;

// console.log(
// 	cityFacts({
// 		name: "Tokyo",
// 		population: "13,929,286",
// 		continent: "Asia",
// 	})
// );

// !Calculate the Profit
// const profit = (obj) =>
// 	`this profit is: ${(obj.sellPrice - obj.costPrice) * obj.inventory}`;

// console.log(
// 	profit({
// 		costPrice: 225.89,
// 		sellPrice: 550.0,
// 		inventory: 100,
// 	})
// );

// !Does the Object Contain a Given Key?
// const hasKey = (obj, key) => Object.keys(obj).includes(key);

// console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));

// !International Greetings

// const GUEST_LIST = {
// 	Randy: "Germany",
// 	Karla: "France",
// 	Wendy: "Japan",
// 	Norman: "England",
// 	Sam: "Argentina",
// };
// const greeting = (str) => {
// 	return Object.keys(GUEST_LIST).includes(str)
// 		? `Hi! I'm ${str}, and I'm from ${GUEST_LIST[str]}`
// 		: `Hi! I'm a guest.`;
// };

// console.log(greeting("Randy"));

// !Planetary Weight Converter
// const Planets = {
// 	Mercury: 3.7,
// 	Venus: 8.87,
// 	Earth: 9.81,
// 	Mars: 3.711,
// 	Jupiter: 24.79,
// 	Saturn: 10.44,
// 	Uranus: 8.69,
// 	Neptune: 11.15,
// };
// const spaceWeights = (
// 	gravityForceOnPlant,
// 	weightOnEarth = 1,
// 	gravityForceOnEarth = 9.81
// ) => {
// 	return (
// 		(weightOnEarth / gravityForceOnEarth) *
// 		Planets[gravityForceOnPlant]
// 	).toFixed(2);
// };

// console.log(spaceWeights("Jupiter"));

// !Exercise 1: Let's Shop
// const shoppingProducts = {
// 	name: "Milk",
// 	price: 20,
// 	amount: 125,
// 	madeIn: "Italy",
// 	set changeProp(value) {
// 		const parts = value.split(" ");
// 		this.name = parts[0];
// 		this["madeIn"] = parts[1];
// 	},
// 	totalBill() {
// 		return `${this.price * this.amount} $`;
// 	},
// 	set setPrice(value = 0) {
// 		let discount = (this.price * value) / 100;
// 		this.price -= discount;
// 		return this.price;
// 	},
// };
// shoppingProducts.changeProp = "Bottle China";
// console.log(shoppingProducts.totalBill());
// shoppingProducts.setPrice = 10;
// console.log(shoppingProducts.price);

// !Nest 2d Array
// let board = [
// 	[1, 2, 3],
// 	["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
// 	[true, false],
// ];
// for (let i = 0; i < board.length; i++) {
// 	const element = board[i];
// 	for (let j = 0; j < element.length; j++) {
// 		const value = element[j];
// 		console.log(value);
// 	}
// }

// const dogDoggo = {
// 	name: "will",
// 	breed: "Bulldog",
// 	favoriteFood: ["Cheese", "Meat", "Bone", "Salmon"],
// };
// console.log(dogDoggo.favoriteFood[1]);
// for (let i = 0; i < dogDoggo.favoriteFood.length; i++) {
// 	const element = dogDoggo.favoriteFood[i];
// 	console.log(element);
// }

// const recipes = {
// 	ingredients: {
// 		butter: "150g",
// 		sugar: "500g",
// 		flour: "300g",
// 	},
// 	get changeIngredients() {
// 		recipes.ingredients["brow sugar"] = recipes.ingredients["sugar"];
// 		delete recipes.ingredients.sugar;
// 		return recipes.ingredients;
// 	},
// 	get printIngredients() {
// 		return Object.values(this.ingredients);
// 	},
// };
// recipes.ingredients["ginger"] = "50g";

// // delete recipes.ingredients.sugar;
// console.log(recipes.changeIngredients);

// console.log(recipes.printIngredients);

// !Objects: Part 1
// const person = {
// 	name: "human",
// 	age: 55,
// 	mission: "driver",
// 	ID: 0110100001110101011011010110000101101110,
// get printValue() {
// 	console.log(
// 		`${this.name} is ${this.age} work as ${this.mission} has ID: ${this.ID}.`
// 	);
// },
//  };
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
// function separate2(obj) {
// 	return [Object.keys(obj), Object.values(obj)];
// }
// console.log(separate2({ a: 1, b: 2, c: 3 }));
// function separate(obj) {
// 	x = Object.keys(obj);
// 	y = Object.values(obj);

// 	var lewes = [...[x], ...[y]];
// 	return lewes;
// }
// console.log(separate({ a: 1, b: 2, c: 3 }));
// !Objects: Part 2
// const withinRange = (number, obj) => {
// 	if (number >= obj.min && number <= obj.max) return true;
// 	else return false;
// };
// console.log(withinRange(8, { min: 0, max: 5 }));

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

// Todo: Counting Letters.
// const countLetters1 = (str, callBack) => {
// 	let theObject = {};
// 	for (var i = 0; i < str.length; i++) {
// 		theObject = { [str[i]]: callBack(str, str[i]) };
// 	}
// 	return theObject;
// };

// const countLetters2 = (str, callBack) => {
// 	let theObject = {};
// 	let Arr = [];
// 	return [...str].forEach((a) => {
// 		theObject = { [a]: callBack(str, a) };
// 		Arr.push(theObject);
// 		console.log(Arr);
// 	});
// };

// function stringCount(str, letter) {
// 	var letter_Count = 0;
// 	for (var i = 0; i < str.length; i++) {
// 		if (str.charAt(i) == letter) {
// 			letter_Count += 1;
// 		}
// 	}
// 	return letter_Count;
// }
// function countLetters3(givenString) {
// 	let newArray = givenString.split("");
// 	let countedLetters = newArray.reduce((allLetters, letter) => {
// 		//allLetters = accumulator, letter = single instance
// 		if (letter in allLetters) {
// 			allLetters[letter]++;
// 		} else {
// 			allLetters[letter] = 1; // {t: 1, r: 1, e:2}
// 		}
// 		return allLetters;
// 	}, {});
// 	return countedLetters;
// }
// console.log(countLetters1("tree", stringCount));
// console.log(countLetters2("tree", stringCount));
// console.log(countLetters3("tree"));

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
// console.log(Object.isFrozen(programming));
