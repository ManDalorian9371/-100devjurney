//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
	constructor(color, cupNumber, brand, size) {
		this.color = color;
		this.cupNumber = cupNumber;
		this.brand = brand;
		this.size = size;
	}
	makeCoffie() {
		console.log(`your ${this.cupNumber} cups are ready to drink`);
	}
	makeSteam() {
		console.log(`care for steam of this ${this.size} ${this.constructor.name}`);
	}
}

const albertoEspresso = new EspressoMachine('black', 2, 'xiaomi', 'big');
