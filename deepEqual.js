// const lodash = require("./lodash");

// !Deep Compare
// const person = {
// 	name: "human",
// 	age: 55,
// 	mission: "driver",
// 	ID: 0110100001110101011011010110000101101110,
// };

// const clone = lodash.cloneDeep(person);
// person.name = "Raafat";
// const deepCompare = (obj1, obj2) => {
// 	if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
// 	else return false;
// };
// console.log(deepCompare(person, clone));

// console.log(lodash.isEqual(person, clone));

// const deepCompareWithObject = (obj1, obj2) =>
// 	Object.entries(obj1).toString() === Object.entries(obj2).toString();
// console.log(deepCompareWithObject(person, clone));

// !Deep Clone
// const deepClone = (obj) => lodash.cloneDeep(obj);
// console.log(deepClone(person));

let person = {
	name: "human",
	age: 55,
	mission: "driver",
	ID: 0110100001110101011011010110000101101110,
	nice: {
		a: 1,
	},
	arr: [1, 2, 3],
	test: null,
};
// let newPerson = JSON.parse(JSON.stringify(person));
// person.name = "not human";
// person.nice.a = 2;
// console.log(`person:\n ${JSON.stringify(newPerson)}`);

const deepCopyFunction = (inObject) => {
	let outObject, value, key;
	if (typeof inObject !== "object" || inObject === null) {
		return inObject;
	}
	outObject = Array.isArray(inObject) ? [] : {};
	for (key in inObject) {
		value = inObject[key];
		outObject[key] = deepCopyFunction(value);
	}
	return outObject;
};
let clone = deepCopyFunction(person);
console.log(clone);
