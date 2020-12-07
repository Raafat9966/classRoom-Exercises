// ! Functions
// const power = (base, exponent) => {
//     let result = 1
//     for (let index = 0; index < exponent; index++) {
//        result *= base
//     }
//     return result
// }
// console.log(power(3, 2));

// ! function scope
// let number = 10
// const half = number => number/2;
// console.log(half(number));
// console.log(number);

// !The Fortune Teller
// const tellFortune = (fatherName, motherName, geoLocation, jobTitle) => {
// 	let married = "";
// 	let kidsNumber = 0;
// 	let futureJob = "";
// 	let location = "";
// 	if ((fatherName.length || motherName.length) >= 7) {
// 		married = "old ugly person";
// 		kidsNumber = 5;
// 	} else {
// 		married = "young beautiful person ";
// 		kidsNumber = 2;
// 	}
// 	if ((geoLocation.length || jobTitle.length) >= 10) {
// 		futureJob = "rich";
// 		location = "moon";
// 	} else {
// 		futureJob = "poor";
// 		location = "underground";
// 	}
// 	return `You will be a ${futureJob} in ${location}, and married to ${married} with ${kidsNumber} kids.`;
// };
// console.log(tellFortune("john", "marry", "Europe", "programmer"));

// !The Puppy Age Calculator
// const calculateDogAge = (dogAge, convertingRate) => {
// 	let dogAgeInHumanYear = dogAge * convertingRate;
// 	return `Your doggie is ${dogAgeInHumanYear} years old in dog years!`;
// };
// console.log(calculateDogAge(5, 5));
// console.log(calculateDogAge(3, 6));
// console.log(calculateDogAge(4, 8));

// !The Lifetime Supply Calculator
// const calculateSupply = (age, amountPerDay) => {
// 	let maxAge = 70;
// 	let restOfYears = maxAge - age;
// 	let amountPerYear = amountPerDay * 365;
// 	let totalSupply = restOfYears * Math.round(amountPerYear);
// 	return `You will need ${totalSupply} snacks to last you until the ripe ge of ${maxAge}`;
// };
// console.log(calculateSupply(34, 3.52));
// console.log(calculateSupply(30, 5.98));
// console.log(calculateSupply(25, 7.78));

// !The Geometrizer
// const calcCircumferenceAndArea = (radius) => {
// 	let circumference = 2 * Math.PI * radius;
// 	let calcArea = Math.PI * radius ** 2;
// 	return `The circumference is ${circumference.toFixed(
// 		3
// 	)} and the area is ${calcArea.toFixed(3)}`;
// };
// console.log(calcCircumferenceAndArea(2.5));
//! The Temperature Converter

// const temperatureConverter = (celsius, fahrenheit) => {
// 	function celsiusToFahrenheit(celsius) {
// 		const cTemp = celsius;
// 		const cToFahr = (cTemp * 9) / 5 + 32;
// 		const result = `${cTemp}\xB0C is ${cToFahr}\xB0F.`;
// 		return result;
// 	}

// 	function fahrenheitToCelsius(fahrenheit) {
// 		const fTemp = fahrenheit;
// 		const fToCel = ((fTemp - 32) * 5) / 9;
// 		const result = `${fTemp}\xB0F is ${fToCel.toFixed(3)}\xB0C.`;
// 		return result;
// 	}

// 	return `${celsiusToFahrenheit(celsius)} and ${fahrenheitToCelsius(
// 		fahrenheit
// 	)}`;
// };
// console.log(temperatureConverter(60, 45));

// console.log("\u2622 \u2623 \u2622 \u2623 \u2622 \u2623 \u2622");

// !Declaring Functions
// function Multiply(number1, number2) {
// 	return number1 * number2;
// }
// const Multiply2 = function (number1, number2) {
// 	return number1 * number2;
// };
// const Multiply3 = (number1, number2) => number1 * number2;

// function divisionRemainder(number1, number2) {
// 	return number1 % number2;
// }
// const divisionRemainder2 = function (number1, number2) {
// 	return number1 % number2;
// };
// const divisionRemainder3 = (number1, number2) => number1 % number2;

// !Print Exponential Values
// const ExponentialValue = (number1, number2) => {
// 	if ((typeof number1 && typeof number2) == "number") {
// 		let result = 1;
// 		let array = [];
// 		for (let index = 0; index < number2; index++) {
// 			result *= number1;
// 			array.push(result);
// 		}
// 		return array.toString();
// 	}
// };
// console.log(ExponentialValue(3, 5));

// !Fruits
// let favoriteFruit = "Bananas";
// const printFavoriteFruit = () => {
// 	favoriteFruit = "Apples";
// 	return `My favorite fruit is: ${favoriteFruit}`;
// };
// console.log(printFavoriteFruit());

// !Multiply a Number by Itself
// const exponent = (number1, number2) => {
// 	let result = 1;
// 	for (let index = 0; index < number2; index++) {
// 		result *= number1;
// 	}
// 	return result;
// };
// console.log(exponent(4, 2));
// console.log(result); // result is not defined outside the function

// !Add up
// const addUp = (number) => {
// 	let result = 0;
// 	for (let index = 1; index <= number; index++) {
// 		result += index;
// 	}
// 	return result;
// };
// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));

// !Cubed
// const sumOfCubes = (num1, num2, num3) => {
// 	var number1 = num1 || 0;
// 	var number2 = num2 || 0;
// 	var number3 = num3 || 0;
// 	return number1 ** 3 + number2 ** 3 + number3 ** 3;
// };
// console.log(sumOfCubes(1, 5, 9));
// console.log(sumOfCubes(2));
// console.log(sumOfCubes());

// !String Check
// const isStrInWord = (string, word) => {
// 	if (word.startsWith(string)) return true;
// 	else return false;
// };
// console.log(isStrInWord("bu", "button"));
// console.log(isStrInWord("tri", "triplet"));
// console.log(isStrInWord("beau", "pastry"));

// !Less Than or Equal to Zero
// const isLEQZero = (number) => (number <= 0 ? true : false);
// console.log(isLEQZero(3));
// console.log(isLEQZero(0));
// console.log(isLEQZero(-4));
// console.log(isLEQZero(10));

// !Count Occurrences
// const countOccurrences = (string, letter) => {
// 	let result = 0;
// 	for (let index = 0; index < string.length; index++) {
// 		if (letter === string[index]) {
// 			result++;
// 		}
// 	}
// 	return result;
// };
// console.log(countOccurrences("this is a string", "i"));
// console.log(countOccurrences("eat good sleep well", "e"));

// ! X To The Power of X
// const calcBaseToExponent = (base, exponent) =>
// 	Math.abs(base) ** Math.abs(exponent);
// console.log(calcBaseToExponent(3, -3));

// !Where's Waldo?
// const isWaldoHere = (string) =>
// 	string.toLowerCase().includes("waldo") ? true : false;
// console.log(isWaldoHere("I found you Waldo!"));
// console.log(isWaldoHere("waldo is here"));
// console.log(isWaldoHere("is wally here?"));

// !pie
// const isEqualSlices = (totalSlices, persons, slicesForEach) =>
// 	persons * slicesForEach === totalSlices ? true : false;
// console.log(isEqualSlices(6, 3, 2));
// console.log(isEqualSlices(8, 3, 3));
// console.log(isEqualSlices(24, 12, 2));

// !XO
// const isEqualNumXandO = (string) => {
// 	let xxx = [];
// 	let ooo = [];
// 	for (let index = 0; index < string.length; index++) {
// 		if ("x" == string[index]) xxx.push("X");
// 		if ("o" == string[index]) ooo.push("O");
// 	}
// 	return xxx.length == ooo.length ? true : false;
// };
// console.log(isEqualNumXandO("xxoo"));
// console.log(isEqualNumXandO("xxooo"));

// !isPrime?
// // 1
// const isPrime = (num) => {
// 	for (let i = 2; i < num; i++) if (num % i === 0) return false;
// 	return num > 1;
// };
// console.log(isPrime(2));
// console.log(isPrime(9));
// console.log(isPrime(10));
// // 2
// function testPrime(num) {
// 	if (num === 1) {
// 		return false;
// 	} else if (num === 2) {
// 		return true;
// 	} else {
// 		for (var x = 2; x < num; x++) {
// 			if (num % x === 0) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}
// }
// console.log(testPrime(88));

// !Validate Email

// const emailValidate = (string) => {
// 	let regEx = /\S+@\S+\.\S+/;
// 	return regEx.test(string);
// };
// console.log(emailValidate("j@example.com"));
// console.log(emailValidate("john.smith@com"));
// console.log(emailValidate("john@.com"));
// console.log(emailValidate("@example.com"));

// const emailValidate = (string) => {
// 	let regEx = /^\S+@\S+$/;
// 	return regEx.test(string);
// };
// console.log(emailValidate("j@example.com"));
// console.log(emailValidate("john.smith@com"));
// console.log(emailValidate("john@.com"));
// console.log(emailValidate("@example.com"));

// const emailValidate = (string) => {
// 	let regEx = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/;
// 	return regEx.test(string);
// };
// console.log(emailValidate("j@example.com"));
// console.log(emailValidate("john.smith@com"));
// console.log(emailValidate("john@.com"));
// console.log(emailValidate("@example.com"));
// console.log(emailValidate("john..smith@email.com"));
// console.log(emailValidate("john.smith@com"));
// console.log(emailValidate("john.smith@email.com"));

// !Prime numbers in range
// const isPrime = (num) => {
// 	for (let i = 2; i < num; i++) if (num % i === 0) return false;
// 	return num > 1;
// };
// const primeInRange = (num) => {
// 	let arr = [];
// 	for (let i = 2; i < num; i++) {
// 		if (isPrime(i)) {
// 			arr.push(i);
// 		}
// 	}
// 	return arr;
// };
// console.log(...primeInRange(100));

// const primeInRange = (number) => {
// 	for (let i = 2; i < number + 1; i++) {
// 		let k = 0;
// 		for (let j = 2; j < i / 2 + 1; j++) {
// 			if (i % j == 0) {
// 				k += 1;
// 			}
// 		}
// 		if (k <= 0) {
// 			console.log(i);
// 		}
// 	}
// };
// primeInRange(100);

// !The Farm Problem

// const legsCounter = (chickens, cows, pigs) => {
//     let chickensLegs = chickens * 2;
//     let cowsLegs = cows * 4;
//     let pigsLegs = pigs * 4;
//     return chickensLegs + cowsLegs + pigsLegs;
// };
// console.log(legsCounter(2, 3, 5));
// console.log(legsCounter(1, 2, 3));
// console.log(legsCounter(5, 2, 8));

// !Convert Hours and Minutes into Seconds

// const timeToSecond = (hours, minutes) => {
//     let hourToSecond = hours * 3600;
//     let minuteToSecond = minutes * 60;
//     return hourToSecond + minuteToSecond;
// };
// console.log(timeToSecond(2, 45));

// const SecondConverter = (second) => {
//     let hours = Math.floor(second / 3600);
//     let minutes = Math.floor((second % 3600) / 60);
//     let seconds = Math.floor((second % 3600) % 60);
//     let hourDisplay =
//         hours > 0 ? hours + (hours == 1 ? "hour, " : "hours, ") : "";
//     let minuteDisplay =
//         minutes > 0 ? minutes + (minutes == 1 ? "minute, " : "minutes, ") : "";
//     let secondDisplay =
//         seconds > 0 ? seconds + (seconds == 1 ? "second, " : "seconds, ") : "";
//     return `${hourDisplay} ${minuteDisplay} ${secondDisplay}`;
// };

// console.log(SecondConverter(3000001));

// function seconds_to_days_hours_mins_secs(seconds) {
//     // day, h, m and s
//     var days = Math.floor(seconds / (24 * 60 * 60));
//     seconds -= days * (24 * 60 * 60);
//     var hours = Math.floor(seconds / (60 * 60));
//     seconds -= hours * (60 * 60);
//     var minutes = Math.floor(seconds / 60);
//     seconds -= minutes * 60;
//     return days + "d, " + hours + "h, " + minutes + "m, " + seconds + "s";
// }
// console.log(seconds_to_days_hours_mins_secs(3000090));

// ! Is the String Empty?
// const emptyString = (string) => (string ? false : true);

// console.log(emptyString(""));
// console.log(emptyString("hi"));

// !Compare Strings by Count of Characters
// const stringsCompare = (string1, string2) =>
// 	string1.length === string2.length ? true : false;

// console.log(stringsCompare("hi", "no"));
// console.log(stringsCompare("yeah", "yeap"));
// console.log(stringsCompare("sad", "happy"));

// !Concatenate First and Last Name into One String
// const concatFirstAndLastName = (firstName, lastName) =>
// 	`${firstName}, ${lastName}`;

// console.log(concatFirstAndLastName("Raafat", "basheer"));

// !Check String for Spaces
// const spacesInString = (string) => string.includes(" ");

// console.log(spacesInString(" hi"));
// console.log(spacesInString("hi"));
// console.log(spacesInString("hi "));

// !Char-to-ASCII
// const charToASCII = (Character) => Character.charCodeAt(0);

// console.log(charToASCII("A"));
// console.log(charToASCII("/"));
// console.log(charToASCII("t"));

// !Case Insensitive Comparison
// const stringsMatch = (string1, string2) =>
// 	string1.toLowerCase() === string2.toLowerCase();

// console.log(stringsMatch("Hello", "hellO"));
// console.log(stringsMatch("Hy", "hi"));

// !Check if the Same Case
// const stringsChecking = (string) => {
// 	if (string === string.toLowerCase()) return true;
// 	else if (string === string.toUpperCase()) return true;
// 	else return false;
// };

// console.log(stringsChecking("word"));
// console.log(stringsChecking("WORD"));
// console.log(stringsChecking("WorD"));

// !Remove the First and Last Characters
// const removeFirstAndLast = (string) => `${string.substring(1, string.length)}`;

// console.log(removeFirstAndLast("Hello"));

// !Strange Pair
// const isStrangePair = (string1, string2) => {
// 	if (
// 		string1.substring(0, 1) ===
// 			string2.substring(string2.length - 1, string2.length) &&
// 		string2.substring(0, 1) ===
// 			string1.substring(string1.length - 1, string1.length)
// 	) {
// 		return true;
// 	} else return false;
// };

// console.log(isStrangePair("sparkling", "groups"));
// console.log(isStrangePair("bush", "hubris"));
// console.log(isStrangePair("", ""));

// !Fibonacci
// const fib = (number) => {
// 	if (number <= 1) return 1;
// 	else return fib(number - 1) + fib(number - 2);
// };

// console.log(fib(9));

// function fibonacci(num, memo) {
// 	memo = memo || [];

// 	if (memo[num]) return memo[num];
// 	if (num <= 1) return 1;

// 	return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
// }
// console.log(fibonacci(5));
