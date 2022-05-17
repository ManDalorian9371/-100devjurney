// *Variables*
// Create a variable and console log the value
const mosi = 43;
console.log(mosi);
// Create a variable, add 10 to it, and alert the value
let jojo = 8;
jojo = jojo + 10;
alert(jojo);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(n1, n2, n3, n4){
	alert(n1 - n2 - n3 - n4);
}
subtracts(122, 32, 1, 13);
// Create a function that divides one number by another and returns the remainder
function remainder(n1, n2){
	return n1 % n2;
}
console.log(remainder(24, 10));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Jumanji(n1, n2){
	let sum = n1 + n2;
	if (sum > 50) {
		alert('jumanji');
	}
}
Jumanji(34, 33);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi(n1, n2, n3){
	let mul = n1 * n2 * n3;
	if (mul % 3 === 0) {
		alert('ZEBRA');
	}
}
multi(12, 3, 9);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordLoop(n, word){
	for (let i = 1; i <= n; i++) {
		console.log(word);
	}
}
wordLoop(10, 'mostafa');
