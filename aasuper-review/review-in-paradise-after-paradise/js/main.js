// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function arrCheck(arr){
	let first = arr[0];
	let last = arr[arr.length - 1];
	if (first === last) {
		alert('We close in an hour');
	} else if (first > last) {
		alert('Bye');
	} else {
		alert('Hi');
	}
}
arrCheck([ 22121, 2, 3, 1234124, , 12432131, 124, 12, 4, 124, 214, 412, 221 ]);
arrCheck([ 221, 2, 3, 1234124, , 12432131, 124, 12, 4, 124, 214, 412, 221 ]);
