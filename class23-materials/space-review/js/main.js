//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numi = [2,5,8,11]
let b = numi.reduce((acc,a)=> acc + a , 0)
console.log(b)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function buildArr(arr) {
    return arr.map((x)=> x*x)
}
console.log(buildArr(numi))
//Create a function that takes string
//Print the reverse of that string to the console
let st = "bob"
function revString(str) {
 return   str.split("").reverse().join("")
} 
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkRev(string) {
    if (string=== revString(string)) {
        console.log("it is palindrome")
    }else {console.log("noo it is not palindrome")}

} checkRev(st)