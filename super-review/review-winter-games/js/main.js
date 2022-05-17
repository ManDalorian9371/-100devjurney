//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function numArr(arr){
	let newArr = [];
	for (let element of arr) {
		if (element % 2 === 0) {
			newArr.push(element);
		}
	}
	return newArr;
}

console.log(numArr([ 1, 2, 3, 4, 5, 6, 67, 44 ]));
