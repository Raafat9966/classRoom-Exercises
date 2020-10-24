// let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
// let justCity = euroCities[1];
// console.log(justCity);

// euroCities[0] = "Berlin";
// euroCities.pop();
// euroCities.push("Budapest");
// euroCities.splice(1, 2);
// console.log(euroCities);

// let asianCities = ["Syria", "China", "Japan", "India", "Korea"];
// let twoCities = asianCities.slice(1, 4);
// console.log(twoCities);

// let worldCities = euroCities.concat(asianCities);
// worldCities.reverse();
// worldCities.splice(2, 1, "Toronto");
// worldCities.splice(1, 0, "Washington");
// let stringWorld = worldCities.join(", ").toString();
// console.log(stringWorld);

// const reverseString = (str) => {
// 	return str.split("").reverse().join("");
// };
// console.log(reverseString("Hello World"));

// !How Much is True?
// function countTrue(arr) {
// 	if (!arr) return 0;
// 	return arr.filter((a) => a === true).length;
// }
// console.log(countTrue([false]));

// !Convert Number to Corresponding Month Name
// const months = {
// 	1: "January",
// 	2: "February",
// 	3: "March",
// 	4: "April",
// 	5: "May",
// 	6: "June",
// 	7: "July",
// 	8: "August",
// 	9: "September",
// 	10: "October",
// 	11: "November",
// 	12: "December",
// };

// const convertNumToMonth = (number) => {
// 	let arr = Object.entries(months);
// 	return arr.filter(item => item[0] == number)[0][1];
// };
// console.log(convertNumToMonth(8));

// !Negate the Array of Numbers
// const NegateNumbers = (arr) => {
// 	return arr.map((element) => {
// 		return element * -1;
// 	});
// };
// console.log(NegateNumbers([]));

// !Difference of Max and Min Numbers in Array
// const bigDifference = (arr) => {
// 	return Math.max(...arr) - Math.min(...arr);
// };
// console.log(bigDifference([15, 2, 6, 1]));

// !Unlucky 13
// const Unlucky = (arr) => {
// 	return arr.filter((item) => {
// 		if (item % 13 != 0) return item;
// 	});
// };
// console.log(Unlucky([53, 182, 435, 591, 637]));

// !The Greater Numbers
// const findGreatest = (arr, number) => {
// 	return arr.filter((item) => {
// 		if (item >= number) return item;
// 	});
// };
// console.log(findGreatest([10, 20, 30], 12));

// !Missing Number
// const missingNumber = (arr) => {
// 	for (let i = 1; i <= 10; i++) {
// 		if (!arr.includes(i)) return i;
// 	}
// };
// console.log(missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// !sumOfNumbers
// const sumArray = (arr) => {
// 	let newArr = arr.reduce((a, b) => a + b);
// 	console.log(newArr);
// };
// sumArray([10, 5, 1, 2, 4, 6, 8, 3, 9]);

// !Hello Friend
// const greeting = (arr) => {
// 	return arr.forEach((item) => {
// 		console.log(`Hello ${item}`);
// 	});
// };
// greeting(["sam", "lily", "luk", "will"]);

// !No Duplicates
// const noDuplicate = (arr) => {
// 	let newSet = new Set(arr);
// 	return [...newSet];
// };
// console.log(noDuplicate([1, 6, 6, 9, 9]));

// !Repeat it
// const repeatIt = (str, number) => {
// 	let arr = new Array(number).fill(str);
// 	return arr;
// };
// console.log(repeatIt("example", 5));

// !Dictionary
// const findWord = (word, arr) => {
// 	return arr.filter((i) => i.startsWith(word));
// };
// console.log(findWord("bu", ["button", "breakfast", "border"]));
// console.log(findWord("tri", ["triplet", "tries", "trip", "piano", "tree"]));
