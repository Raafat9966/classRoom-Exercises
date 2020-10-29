// let chunked = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// for (let i = 0; i < chunked.length; i++) {
// 	for (let j = 0; j < chunked[i].length; j++) {
// 		console.log(chunked[i][j]);
// 	}
// }

// let chunked = [
// 	[
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9],
// 	],
// 	[
// 		[10, 20, 30],
// 		[40, 50, 60],
// 		[70, 80, 90],
// 	],
// ];

// for (let i = 0; i < chunked.length; i++) {
// 	for (let j = 0; j < chunked[i].length; j++) {
// 		for (let b = 0; b < chunked[i][j].length; b++) {
// 			console.log(`${i} -> ${j} -> ${b} -> ${chunked[i][j][b]}`);
// 		}
// 	}
// }

// object
// let newYorkCity = {
// 	Manhattan: {
// 		Uptown: {
// 			"Washington Heights": "Daniel",
// 			UWS: "Cathy",
// 		},
// 		Midtown: {
// 			"Madison Square": "Susan",
// 			"Theater District": ["Robert", "Latisha"],
// 		},
// 		Downtown: {
// 			Tribeca: "Billy",
// 			"Financial District": {
// 				Fullstack: {
// 					"11th floor": ["David", "Nimit"],
// 					"25th floor": "Ashi",
// 				},
// 			},
// 		},
// 	},
// 	Brooklyn: {
// 		Bushwick: "Marilyn",
// 		"Bed-Stuy": ["Juan", "Denice"],
// 	},
// 	Queens: {
// 		Astoria: "Ella",
// 		Flushing: "Eric",
// 	},
// 	Bronx: {
// 		Fordham: "Aaron",
// 		Melrose: "Krysten",
// 	},
// 	"Staten Island": {
// 		Arlington: ["Nadine", "Mose"],
// 		"Elm Park": "Arthur",
// 	},
// };

// !2D Array
// let board = [
// 	[1, 2, 3],
// 	["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
// 	[true, false],
// ];
// const loopIn2DArray = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr[i].length; j++) {
// 			console.log(`${i} -> ${j} -> ${arr[i][j]}`);
// 		}
// 	}
// };
// loopIn2DArray(board);

// !Doggo
// const doggo = {
// 	name: "well",
// 	breed: "dog",
// 	favoriteFood: ["meat", "fish", "snack"],
// 	get accessFood() {
// 		console.log(this.favoriteFood[1]);
// 	},
// 	get loopFood() {
// 		this.favoriteFood.forEach((m) => console.log(m));
// 	},
// };
// doggo.accessFood;
// doggo.loopFood;

// !nestArrays(currDepth, maxDepth)
const nestArray = (currDepth, maxDepth) => {
	if (currDepth == maxDepth) {
		return [currDepth];
	}
	return [currDepth, nestArray(currDepth + 1, maxDepth)];
};

console.log(`the nested array = ${JSON.stringify(nestArray(0, 2))}`);

// !nestObjects(currDepth, maxDepth)
// const nestObjects = (currDepth, maxDepth) => {
// 	if (currDepth == maxDepth)
// 		return (theObject = {
// 			currDepth: currDepth,
// 			nestedObj: null,
// 		});

// 	return (theObject = {
// 		currDepth: currDepth,
// 		nestedObj: nestObjects(currDepth + 1, maxDepth),
// 	});
// };

// console.log(`the nested object = ${JSON.stringify(nestObjects(0, 2))}`);

// !Lowest to Highest
// const lowToHigh = (arr) => {
// 	for (var i = 1; i < arr.length; i++)
// 		for (var j = 0; j < i; j++)
// 			if (arr[i] < arr[j]) {
// 				let swap = arr[i];
// 				arr[i] = arr[j];
// 				arr[j] = swap;
// 			}
// 	return arr;
// };
// console.log(lowToHigh([4, 2, 5, 3, 9, 7, 1, 8, 2, 6]));
// console.log(lowToHigh(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]));

// const lowToHigh = (arr) => {
// 	for (var i = 1; i < arr.length; i++)
// 		for (var j = 0; j < i; j++)
// 			if (arr[i].length < arr[j].length) {
// 				let swap = arr[i];
// 				arr[i] = arr[j];
// 				arr[j] = swap;
// 			}
// 	return arr;
// };
// console.log(lowToHigh(["Frankel", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]));


