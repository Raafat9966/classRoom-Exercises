function Employee(_name, _age, _designation) {
	this.name = _name;
	this.age = _age;
	this.designation = _designation;
}
let emp = new Employee("Raafat", 25, "Fun");
console.log(emp.name);
emp.job = "nothing";
console.log(emp);

emp.displayName = function () {
	console.log("My name is", this.name);
};
emp.displayName();
console.log(emp);
