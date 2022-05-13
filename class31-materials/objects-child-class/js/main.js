// //Create an a class and extend it - Can be anything you would like it to be!
// class Animal {
// 	constructor(name, size) {
// 		this.name = name;
// 		this.size = size;
// 	}
// 	speak() {
// 		console.log(`${this.name} makes a ${this.size} sound`);
// 	}
// }

// class Chicken extends Animal {
// 	constructor(name, size, useFor) {
// 		super(name, size);
// 		this.usage = useFor;
// 	}
// }
// let jojo = new Chicken('jojo', 'Small', 'Egg');
function* fibonacci(){
	// a generator function
	let [ prev, curr ] = [ 0, 1 ];
	while (true) {
		[ prev, curr ] = [ curr, prev + curr ];
		yield curr;
	}
}

for (const n of fibonacci()) {
	console.log(n);
	// truncate the sequence at 1000
	if (n >= 1000) {
		break;
	}
}
