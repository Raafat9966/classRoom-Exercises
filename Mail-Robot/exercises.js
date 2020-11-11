// !Persistent group
class PGroup {
	constructor(num) {
		this.num = num;
	}

	has(value) {
		return this.num.includes(value);
	}

	add(value) {
		if (this.has(value)) return this;
		return new PGroup(this.num.concat([value]));
	}

	delete(value) {
		if (!this.has(value)) return this;
		return new PGroup(this.num.filter((m) => m !== value));
	}
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));

console.log(a.has("b"));

console.log(b.has("a"));
