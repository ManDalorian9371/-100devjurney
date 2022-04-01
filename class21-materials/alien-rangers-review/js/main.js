//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows= ['tom and jerry','batman','ozark','lost']
tvShows.forEach(x=>console.log(x)) 
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous
// Arrays
let numis = [1,82,3,55,65,23,11] 
let evens = numis.filter(x=> x%2===0 ? true : false )
console.log(evens) 
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function lowAndHigh(arr) {
    let sorted = arr.sort((a,b)=> b-a)
    let bb =`${sorted[1]}` +` ${sorted[(sorted.length) - 2]}`
    console.log(bb)
}
lowAndHigh(numis)        