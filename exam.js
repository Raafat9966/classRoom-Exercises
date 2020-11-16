// Answer Sheet - all answers should go here

/* 
except for A-1 and C, you will always write a function that returns values

*/

/* A-1 (5)
define and fill an object
 */
const profileData = {
	name: "John",
	surname: "Well",
	age: 45,
	city: "New York",
};

/* A-2 (5) */
const convertObjectToArray = (obj) => Object.entries(obj);
console.log(convertObjectToArray(profileData));
/* B-1 (10) */
const convertArrayData = (array) => {
	[array[0], array[1]] = [array[1], array[0]];
	array.splice(-1, 1, "milk");
	return array;
};
let beverages = ["coffee", "tea", "juice"];
console.log(convertArrayData(beverages));
/* B-2 (15) */
const convertArraysToObject = (keys, values) =>
	keys.reduce((obj, key, index) => ({ ...obj, [key]: values[index] }), {});
let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];

let areas = [
	"891.68 km2",
	"755.3 km2",
	"310.7 km2",
	"207.35 km2",
	"217.41 km2",
];
console.log(convertArraysToObject(cities, areas));

/* B-3 (10) */
const createGrid = (cell, value) => {
	let array = [cell];
	for (var i = 0; i < cell; i++) {
		array[i] = [cell];
		for (var j = 0; j < cell; j++) {
			array[i][j] = value;
		}
	}
	return array;
};
console.log(createGrid(3, "*"));
/* B-4 (10) */
const wordConverter = (array, string) =>
	array.map((e) => e.toString()).map((item) => item.concat(string));
let adjectives = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(adjectives, "er"));
/* B-5 (10) */
const calculateHours = (array) =>
	array.map((item) => item.end - item.start).reduce((sum, i) => sum + i, 0);
const hourTracking = [
	{ day: "Monday", start: 8, end: 17 },
	{ day: "Tuesday", start: 9, end: 15 },
	{ day: "Wednesday", start: 10, end: 18 },
	{ day: "Thursday", start: 7, end: 14 },
	{ day: "Friday", start: 6, end: 12 },
];
console.log(calculateHours(hourTracking));
/* C (10) 
write a class
*/
class Course {
	constructor(teacher, type, number) {
		this.teacher = teacher;
		this.type = type;
		this.number = number;
		this.spaceNeeded = () =>
			`The classroom should be ${this.number * 2}m².`;
		this.details = () =>
			`This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
	}
}
let course = new Course("John", "web development", 22);
console.log(course.spaceNeeded());
console.log(course.details());
/* D-1 (10) */
const capitalizeFirstLetter = (string) =>
	typeof string !== "string"
		? capitalizeFirstLetter(string.toString())
		: string
				.split(" ")
				.map((word) => word[0].toUpperCase() + word.substr(1))
				.join(" ");
console.log(capitalizeFirstLetter("hey there"));
console.log(capitalizeFirstLetter(true));
/* D-2 (15) */
const validPin = (number) => {
	if (typeof parseInt(number) !== "number") return false;
	else if (number.length !== 4) return false;
	else if (number[number.length - 1] % 2 !== 0) return false;
	else if (
		number
			.split("")
			.map(Number)
			.reduce((a, b) => a + b, 0) < 5
	)
		return false;
	else if (
		number[0] === number[1] &&
		number[1] === number[2] &&
		number[2] === number[3]
	)
		return false;
	return true;
};

console.log(validPin("1234"));
// true
console.log(validPin("1235"));
// false
console.log(validPin("wwww"));
// false
console.log(validPin("12345"));
// false
console.log(validPin("2222"));
// false
console.log(validPin("1000"));
// false
console.log(validPin("2224"));
// true

// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {
	profileData,
	convertObjectToArray,
	convertArrayData,
	convertArraysToObject,
	createGrid,
	wordConverter,
	calculateHours,
	Course,
	capitalizeFirstLetter,
	validPin,
};
