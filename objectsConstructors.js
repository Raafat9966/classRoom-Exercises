// function Employee(_name, _age, _designation) {
// 	this.name = _name;
// 	this.age = _age;
// 	this.designation = _designation;
// }
// let emp = new Employee("Raafat", 25, "Fun");
// console.log(emp.name);
// emp.job = "nothing";
// console.log(emp);

// emp.displayName = function () {
// 	console.log("My name is", this.name);
// };
// emp.displayName();
// console.log(emp);

// !Getter and Setter
var o = {
	a: 7,
};
Object.defineProperty(o, "add", {
	get: function add() {
		return this.a * 2;
	},
});
Object.defineProperty(o, "changeValue", {
	set: function changeValue(x) {
		this.a = x;
	},
});

console.log(o.add);
o.changeValue = 2;
o.__defineGetter__("printNumber", function () {
	console.log(this.a);
});
o.printNumber;
o.__defineSetter__("addNumber", function (x) {
	return (this.sumNumber = this.a + x);
});
o.addNumber = 3;
console.log(o.sumNumber);

// !Sum of Squares
function SquareSum(num1, num2, num3) {
	this.num1 = num1;
	this.num2 = num2;
	this.num3 = num3;
	this.squareSum = function () {
		return this.num1 ** 2 + this.num2 ** 2 + this.num3 ** 2;
	};
}
const someNumber = new SquareSum(2, 3, 4);
console.log(someNumber.squareSum());

// !Calculator
function Calculator(number1, number2) {
	this.number1 = number1;
	this.number2 = number2;
	this.add = function () {
		return this.number1 + this.number2;
	};
	this.subtract = function () {
		return Math.abs(this.number1 - this.number2);
	};
	this.multiply = function () {
		return this.number1 * this.number2;
	};
	this.divide = function () {
		return this.number1 > this.number2
			? this.number1 / this.number2
			: this.number2 / this.number1;
	};
}
var obj = new Calculator(5, 10);
console.log(obj.add());
console.log(obj.subtract());
console.log(obj.multiply());
console.log(obj.divide());

// !Calculate the Students' Total Marks
function Student(_mark1, _mark2) {
	this.mark1 = _mark1;
	this.mark2 = _mark2;
	this.showMark = function (number) {
		if (number === 1) return this.mark1;
		else if (number === 2) return this.mark2;
	};
	this.calcTotal = function () {
		return this.mark1 + this.mark2;
	};
}
var student = new Student(60, 70);
console.log(student.showMark(1));
console.log(student.showMark(2));
console.log(student.calcTotal());
