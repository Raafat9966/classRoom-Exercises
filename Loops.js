// program that prompts for:
// employee name
// var name = prompt("Employee's Name", "Name"); //anything after a comma in a prompt function, is the placeholder in the input field
// employee's SSN
// var ssn = prompt("Social Security Number for " + name, "000-00-0000");
// employee's wage
// var wage= prompt("Hourly wage for" + name, "5.25");
// number of hours worked
// var hours = prompt("How many hours did" + name + " work?", "40");
// to calculate the wage
// var total;
// IF emplyee worked less than or equal 40 hours
// if (hours <= 40)
//     total = hours * wage;
//  IF the hours worked is greater than 40, use one and the half (x1.5) for overtime rate
// (for hours beyond 40) and compute accordingly.
// else
// 	total = (40 * wage) + (hours - 40) * wage * 1.5;

// console.log(total);

// let x = 1;
// let y = 2;
// let z = 55;
// if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) console.log(true)
// else console.log(false)

// let text = "Python"
// if (text.endsWith("on")) console.log(text)
// else console.log("Py".concat(" ", text))

// let determiner = -9;
// if (determiner < 0) {
// 	let x = "Less than 0";
// 	console.log(x);
// }
// if (determiner >= 0) {
// 	let x = "Greater or equal to 0";
// 	console.log(x);
// }

// if (determiner < 0) {
// 	let updater = "Less than 0";
// 	let message = "Positive Integer";
// 	console.log(`${updater} and ${message}`);
// }

// // console.log(message); message is not define outside the scope

// if (determiner >= 0) {
// 	let updater = "Greater or equal to 0";
// 	console.log(updater);
// }

// let apple = 5;
// let ternary = apple ? console.log(true) : console.log(false);

// const day = "saturday";

// switch (day) {
// 	case "saturday":
// 	case "sunday":
// 	case "monday":
// 		console.log(`${day} is nice day`);
// 		break;
// 	default:
// 		console.log("just a nice day!");
// }

// var fruits = prompt(
// 	"which fruit you like",
// 	"apples, bananas, oranges, mangoes"
// );
// switch (fruits) {
// 	case "apples":
// 		console.log("Apples are ok");
// 		break;
// 	case "bananas":
// 		console.log("Bananas are good and after a football match.");
// 		break;
// 	case "oranges":
// 		console.log("I can eat oranges all day");
// 		break;
// 	case "mangoes":
// 		console.log("Did someone say mangoes? Where?");
// 		break;
// 	default:
// 		console.log("just a fruit!!");
// }

// var fruits2 = prompt(
// 	"which fruit you like",
// 	"apples, bananas, oranges, mangoes"
// );
// if (fruits2 === "apples") console.log("Apples are ok");
// else if (fruits2 === "bananas")
// 	console.log("Bananas are good and after a football match.");
// else if (fruits2 === "oranges") console.log("I can eat oranges all day");
// else if (fruits2 === "mangoes") console.log("Did someone say mangoes? Where?");
// else console.log("just a fruit!!");

// let x = 0;

// while (x <= 5) {
// 	x++;
// 	console.log(x);

// }

// let markMass = 86.15;
// let markHeight = 178;
// let johnMass = 75.95;
// let johnHeight = 183;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;

// let markHigherThenJohn = markBMI > johnBMI ? true : false;

// console.log(
// 	`Is Mark's BMI higher than John's? Why yes, it's ${markHigherThenJohn}, it is`
// );

// if (markBMI > johnBMI) console.log(`Mark BMI ${markBMI} is the highest`);
// else console.log(`John BMI ${markBMI} is the highest`);

// var arr = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6],
// ];

// for (var i = 0; i < arr.length; i++) {
// 	for (var j = 0; j < arr[i].length; j++) {
// 		console.log(arr[i][j]);
// 	}
// }

// const multi = (num) => {
// 	let x = 1;
// 	let y = num * 10;
// 	while (x <= y) {
// 		x++;
// 		if (x % num === 0) {
// 			console.log(x);
// 		}
// 	}
// };

// const multi2 = (num2) => {
// 	let y = num2 * 10;
// 	for (let x = 1; x <= y; x++) {
// 		if (x % num2 === 0) console.log(x);
// 	}
// };

// multi(11);
// console.log("new one");
// multi2(11);

// const sum = (num) => {
// 	if (num == 1) {
// 		return 1;
// 	} else return num + sum(num - 1);
// };

// console.log(sum(5));

// for (var i = 0; i < 10; i++) {}
// console.log(i);

// let x = 0;

// while (x < 10) {
// 	x++;
// }
// console.log(x);

// !indexOf

// let arr = ["hi", "how", "are", "you", "today"];
// let newArr = arr.reverse();
// for (let i = 0; i < newArr.length; i++) {
// 	var item = newArr[i];
// 	console.log(item, newArr.indexOf(item));
// }

// !------reverseArray
// let names = ["Alice", "Bob", "Eve"];

// function reverseArray(arr) {
// 	var newArray = [];
// 	for (var i = arr.length - 1; i >= 0; i--) {
// 		newArray.push(arr[i]);
// 	}
// 	return newArray;
// }

// console.log(reverseArray(names));

// !------SumArray

// let arr2 = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
// 	sum += arr2[i];
// 	console.log(sum);
// }

// !------countingBottles
// let bottles = ["one", "two", "three", "four", "five"];
// for (let x = 0; x < bottles.length; x++) {
// 	const counting = bottles[x];
// 	console.log(`There are ${counting} of beer on the wall`);
// }

// !------oddOrEven

// for (let y = 0; y <= 20; y++)
// 	y % 2 === 0 ? console.log(`${y} is even`) : console.log(`${y} is odd`);

// !------multiplicationTables

// const multi = () => {
// 	for (var x = 1; x <= 10; x++) {
// 		for (var z = 0; z < 10; z++) {
// 			console.table(`${x} X ${z} = ${x * z}`);
// 		}
// 	}
// };

// multi();

// let number = 9;
// for (let i = 1; i <= 10; i++) {
// 	result = i * number;
// 	console.log(`${number} * ${i} = ${result}`);
// }

// const multi = () => {
// 	for (var x = 1; x <= 10; x++) {
// 		let line = "";
// 		for (var z = 0; z < 10; z++) {
// 			line += x * z + " ";
// 		}
// 		console.log(`${line}`);
// 	}
// };
// multi();

// ! isPalindrome

// const isPalindrome = (word) => {
// 	let reverseWord = "";
// 	for (let i = word.length - 1; i >= 0; i--) {
// 		element = word[i];
// 		reverseWord = reverseWord.concat(element);
// 	}
// 	if (word === reverseWord) {
// 		console.log(`${word} is Palindrome word`);
// 	} else console.log(`${word} is not Palindrome word`);
// };

// isPalindrome("madan");

// ! chessboard

// var cube = "";
// var size = 9; // prompt("enter the height and width");
// for (var y = 0; y < size; y++) {
// 	for (var x = 0; x < size; x++) {
// 		(x + y) % 2 == 0 ? (cube += "#") : (cube += " ");
// 	}
// 	cube += "\n";
// }
// console.log(cube);

// !Setup Pairs for Pair Programming

// let boys = [
// 	"Aaran",
// 	"Amar",
// 	"Aarez",
// 	"Aarman",
// 	"Aaron",
// 	"Samatar",
// 	"Sambrid",
// 	"Sameer",
// 	"Sami",
// 	"Samir",
// 	"Sami-Ullah",
// 	"Salim",
// 	"Samuel",
// 	"Samuela",
// ];
// let girls = [
// 	"Emily",
// 	"Hannah",
// 	"Madison",
// 	"Ashley",
// 	"Sarah",
// 	"Alexis",
// 	"Samantha",
// 	"Jessica",
// 	"Elizabeth",
// 	"Taylor",
// 	"Lauren",
// 	"Alyssa",
// 	"Kayla",
// 	"Sanaullah",
// ];

// let boysNames = [];
// let girlsNames = [];

// for (let b = 0; b < boys.length; b++) {
// 	boysNames = boys[b];

// 	for (let g = 0; g < girls.length; g++) {
// 		girlsNames = girls[g];

// 		if (boys.indexOf(boys[b]) === girls.indexOf(girls[g])) {
// 			console.log([boysNames, girlsNames]);
// 		}
// 	}
// }

// var pairs = {};

// var i;
// for (i = 0; i < boys.length; i++) {
// 	pairs[girls[i]] = boys[i];
// }
// console.log(pairs);

// let students = ["Alice", "Bob", "Eve", "Tom", "Nici"];

// let pairs = [];

// for (let i = 0; i < students.length; i++) {
// 	for (let j = 0; j < students.length; j++) {
// 		if (i > j) pairs.push(students[i] + ", " + students[j]);
// 	}
// }

// for (let i = 0; i < pairs.length; i++) {
// 	console.log(pairs[i]);
// }

// ! numbers

// var array = [];
// for (let index = 100; index <= 1000; index = index + 100) {
// 	array.push(index);
// }
// console.log(array.join(" "));

// var array2 = [];
// for (let index = 0; index <= 10; index += 2) {
// 	array2.push(index);
// }
// console.log(array2.join(" "));

// var array3 = [];
// for (let index = 3; index <= 15; index += 3) {
// 	array3.push(index);
// }
// console.log(array3.join(" "));

// var array5 = [];
// for (let index = 9; index >= 0; index--) {
// 	array5.push(index);
// }
// console.log(array5.join(" "));

// var array4 = [];
// for (let index = 0; index < 3; index++) {
// 	for (let index = 0; index < 5; index++) {
// 		array4.push(index);
// 	}
// }
// console.log(array4.join(" "));

// let result = "";
// for (let i = 1; i <= 4; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		result += i + " ";
// 	}
// }
//   console.log(result);

// ! Alarm

//  for (let index = 0; index <= 10; index++) {
// 	const THRESHOLD = 0.15;
// 	let randomNumber = Math.random().toFixed(2);
// 	let result = (randomNumber - THRESHOLD).toFixed(2);
// 	console.log(
// 		`Attention: current value ${randomNumber} exceeds the threshold ${THRESHOLD} by ${result}.`
// 	);
// }

// const threshold = 0.25;
// for (let i = 0; i <= 10; i++) {
// 	let value = Math.random().toFixed(2);
// 	if (value > threshold) {
// 		let difference = (value - threshold).toFixed(2);
// 		let stars = Math.floor(difference / 0.1);
// 		let starString = "";
// 		for (let x = 0; x < stars; x++) {
// 			starString += "*";
// 		}
// 		console.log(
// 			`${starString} Attention: current value ${value} exceeds the threshold ${threshold} by ${difference}.`
// 		);
// 	}
// }
