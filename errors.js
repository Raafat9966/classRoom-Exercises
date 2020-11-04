// !1. Fido says...
class Dog {
	constructor(name) {
		this.name = name;
	}
	bark = function () {
		console.log(`${this.name} says woof`);
	};
}

let fido = new Dog("fido");
fido.bark();
