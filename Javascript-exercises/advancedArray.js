// const arr1 = [1, 2, 3, 4, 5];

// const slidingWindow = (arr, windowSize) => {
// 	arr.forEach((e, i, arr) => {
// 		let sum = null;
// 		let average = null;

// 		for (let j = i; j < i + windowSize; j++) {
// 			if (j > arr.length - 1) sum += 0;
// 			else sum += arr[j];
// 		}

// 		average = sum / windowSize;

// 		console.log(
// 			"window-index:",
// 			i,
// 			"window-value:",
// 			e,
// 			"window-average:",
// 			average
// 		);
// 	});
// };

// slidingWindow(arr1, 5);

// const arr2 = [1, 2, 3, 4, 5];

// arr2.forEach((e, i, arr) => {
// 	let sum = null;
// 	let average = null;

// 	for (let j = i; j < i + 5; j++) {
// 		if (j > arr.length - 1) sum += 0;
// 		else sum += arr[j];
// 	}

// 	average = sum / 5;
// 	console.log("av:", average);
// });

// !Get total orders
// const orders = [
// 	{ amount: 250 },
// 	{ amount: 400 },
// 	{ amount: 100 },
// 	{ amount: 325 },
// ];
// console.log(orders.reduce((sum, item) => sum + item.amount, 0));

// !2. Increment by 1
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// const incrementArr = (arr) => {
// 	return arr.map((element) => ++element);
// };
// console.log(incrementArr(arrayOfNumbers));
// or
// arrayOfNumbers.forEach(function (value, index, array) {
// 	++array[index];
// });
// console.log(arrayOfNumbers);

// !Filter Evens
// const filterEvens = (arr) => arr.filter((item) => item % 2 === 0);
// console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
// console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]

// !Filter Friends
// const filterItems = (arr, item) =>
// 	arr.filter((element) => element.includes(item));

// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, "ka")); // ["Rika"];
// console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];

// !sum up
// const sum = (arr) => arr.reduce((sum, item) => sum + item, 0);
// console.log(sum([1, 2, 3, 4, 5]));
// console.log(sum([6, 7, 7]));

// !Square Root
// const squareRoot = (arr) => arr.map((item) => Math.sqrt(item));
// console.log(squareRoot([1, 2, 3, 4, 5]));

// !flatten Array
// function flatten(arr) {
// 	const result = [];
// 	arr.forEach((i) => {
// 		if (Array.isArray(i)) {
// 			result.push(...flatten(i));
// 		} else {
// 			result.push(i);
// 		}
// 	});
// 	return result;
// }
// const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

// console.log(flatten(nested));

// !Bubble Sorting
// function bubbleSort(array) {
// 	for (let i = 0; i < array.length; i++)
// 		for (let j = 0; j < array.length; j++) {
// 			let item = array[j];
// 			var nextItem = array[j + 1];
// 			if (item > nextItem) {
// 				array[j] = nextItem;
// 				array[j + 1] = item;
// 			}
// 		}
// 	return array;
// }

// console.log(bubbleSort([9, 5, 7, 1, 0, 2, 4, 10, 1, 6, 3, 5, 8]));
// console.log(bubbleSort([900, 5, 70, 0.1, 0, 02, 4, 100, 1, 6, 35, 56, 8]));
