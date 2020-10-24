// !Addition
// const add = (num1) => {
// 	const add2 = (num2) => {
// 		return num1 + num2;
// 	};
// 	return add2;
// };
// console.log(add(3)(4));

// !Multiply
// const multi = (x) => {
// 	const innerFunc = (y) => {
// 		return x * y;
// 	};
// 	return innerFunc;
// };
// let doMulti = multi(5);
// console.log(doMulti(6));

// !Calculate Money Saved till Pension Day!
// (function calculatePension(age, retireAge) {
// 	if (age >= retireAge) {
// 		console.log(`You're already retired`);
// 	} else {
// 		const totalAmount = (salary, percentSave) => {
// 			return `${
// 				(retireAge - age) * ((salary * percentSave * 12) / 100)
// 			}$`;
// 		};
// 		console.log(totalAmount(2000, 5));
// 	}
// })(40, 65);

// !Anonymous functions all the way

const lambdaDepth = (num) => {
	const depth = () => {
		if (num === 0) return "dci";
		num--;

		return depth;
	};

	return depth();
};

console.log(lambdaDepth(0));
console.log(lambdaDepth(1)());
console.log(lambdaDepth(2)()());
console.log(typeof lambdaDepth(2)());

// !callBack function

// const one = (x) => console.log(x);
// const two = (ranVar, callBack) => callBack(ranVar);

// two(Math.floor(Math.random() * 6), one);

// !closures callBack functions
// function functionFour(var1, var2, callback) {
// 	let x = var1;
// 	let y = var2;
// 	const innerFunc = () => {
// 		let add = x + y;
// 		return callback(add);
// 	};
// 	return innerFunc();
// }
// functionFour(2, 2, print);

// function print(x) {
// 	console.log(x);
// }

// function functionFour(var1, var2, callback) {
// 	let x = var1;
// 	let y = var2;
// 	let add = x + y;
// 	const innerFunc = (num) => {
// 		return callback(num);
// 	};
// 	return innerFunc(add);
// }
// functionFour(2, 2, print);

// function print(x) {
// 	console.log(x);
// }
