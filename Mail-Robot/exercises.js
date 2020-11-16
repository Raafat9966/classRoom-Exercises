// !Persistent group
class PGroup {
	constructor(num) {
		this.num = num;
	}

	has = (val) => this.num.includes(val);

	add = (val) => {
		if (this.has(val)) return this;
		return new PGroup(this.num.concat([val]));
	};

	delete = (val) => {
		if (!this.has(val)) return this;
		return new PGroup(this.num.filter((x) => x !== val));
	};
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));

console.log(a.has("b"));

console.log(b.has("a"));
