//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
let pokemons = [ 'bau', 'hashish', 'abdollah', 'suzi' ];

function reversePokemons(listOfPokemons){
	return listOfPokemons.reverse();
}
console.log(reversePokemons(pokemons));

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

let a = [ 2, 2, 3 ];
let b = [ 1, 1, 2 ];
function makeCompare(arr1, arr2){
	let sqrtarr = arr1.map((x) => Math.pow(x, 2)).reduce((acc, x) => (acc += x), 0);
	let cubearr = arr2.map((x) => Math.pow(x, 3)).reduce((acc, x) => (acc += x), 0);

	return sqrtarr > cubearr;
}
console.log(makeCompare(a, b));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function mix(arr){
	let mixed = arr.filter((x, i) => (x % i === 0 ? true : false));
	console.log(mixed);
}
mix([ 68, -1, 1, -7, 10, 10 ]);
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
let pp = [ '2', 54, '12', '12' ];

function sumOfAny(arr){
	let numArr = arr.map((x) => Number(x)).reduce((acc, x) => (acc += x), 0);
	return numArr;
}
console.log(sumOfAny(pp));
