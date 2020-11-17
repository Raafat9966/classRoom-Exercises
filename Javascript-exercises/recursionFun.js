// !loop solution
// function iterativePattern(startVal, endVal) {
// 	const arr = [];
// 	for (let i = startVal; i <= endVal; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// console.log("interactive solution array: ", iterativePattern(1, 10));

// !recursive solution
// function recursivePattern2(startVal, endVal) {
// 	//base case
// 	if (startVal >= endVal) {
// 		return [startVal];
// 	} else {
// 		// recursive function
// 		const arr = recursivePattern2(startVal, endVal - 1);
// 		arr.push(endVal);
// 		return arr;
// 	}
// }
// console.log("recursive solution array: ", recursivePattern2(3, 10));

// const countdown = (i) => {
// 	console.log(i);
// 	// base case
// 	if (i <= 0) {
// 		return null;
// 	}
// 	countdown(i - 1);
// 	return null;
// };

// countdown(5);

// const fact = (x) => {
// 	if (x === 1) {
// 		return 1;
// 	}
// 	return x * fact(x - 1);
// };

// console.log(fact(6));

// !find string length
// function length(str) {
// 	if (str == "") return 0;
// 	else return length(str.substring(1)) + 1;
// }
// console.log(length("Hello"));

// !reverse string
// function reverse(str) {
// 	if (str == "") return "";
// 	else return str.slice(-1) + reverse(str.slice(0, -1));
// }
// console.log(reverse("hello"));

// !power
// function circuitPower(voltage, current) {
// 	if (current == 1) return voltage;
// 	else return voltage * circuitPower(voltage, current - 1);
// }
// console.log(circuitPower(230, 10));

// !fibonacci
// const fibonacci = (number) => {
// 	if (number <= 1) return 1;
// 	return fibonacci(number - 1) + fibonacci(number - 2);
// };
// console.log(fibonacci(9));

function getMaxSubSum(arr) {
	let maxSum = 0; // if we take no elements, zero will be returned

	for (let i = 0; i < arr.length; i++) {
		let sumFixedStart = 0;
		for (let j = i; j < arr.length; j++) {
			sumFixedStart += arr[j];
			maxSum = Math.max(maxSum, sumFixedStart);
			console.log(sumFixedStart);
		}
	}
}
getMaxSubSum([-1, 2, 3, -9]);
