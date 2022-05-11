//Create an a class and extend it - Can be anything you would like it to be!
class Animal {
	constructor(name, size) {
		this.name = name;
		this.size = size;
	}
	speak() {
		console.log(`${this.name} makes a ${this.size} sound`);
	}
}

class Chicken extends Animal {
	constructor(name, size, useFor) {
		super(name, size);
		this.usage = useFor;
	}
}
let jojo = new Chicken('jojo', 'Small', 'Egg');
