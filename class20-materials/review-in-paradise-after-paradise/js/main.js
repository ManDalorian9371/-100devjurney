// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi".
// If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function toyo(arr) {
 let b = arr.length
 if (arr[0]===arr[b-1]) {alert("we close in an hour")}
 else if (arr[0]<arr[b-1]) {alert('hi')}
 else {alert('bye')}
}
toyo([9,2,4,2,9])