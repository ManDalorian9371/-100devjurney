// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is
// a question
let mys = "hi i am mostafa ?"
// if (mys.includes("?")) {
//     alert("hey")
// }
//Declare a variable, assign it a string of multiple words, replace every "jr.
// dev" with "software engineer", and print it to the console
let stringOfEx = "i am mostafa  and i am jr. dev" ;
stringOfEx = stringOfEx.replaceAll("jr. dev" , "software engineer");
console.log(stringOfEx)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function gameFun() {
    let random = Math.random()
    if (random < 0.33) {
        return "rock"
    }else if (random<0.66) {
        return "paper"
    } else { return "scissors"}
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines
// if they won a game of rock paper scissors against a bot using the above function
function playFun(toss) {
    let b = gameFun()
    if (b===toss) {console.log("try again")}
    else if ((b=== "rock" && toss === "paper") || (b==="scissors" && toss==="rock") ||(b==="paper" && toss==="scissors"))
    {console.log("You Win !!!")} else {console.log("You Failed !")}
}
//*Loops*
//Create a function that takes an array of choices. 
//Play the game x times where x is the number of choices in the array. 
//Print the results of each game to the console.

playFun("paper")
// function digitize(n) {
//     let pp = n.toString().split('').reverse()
//    let nums = pp.map(element => {
//         return Number(element)
//     });
//     console.log(nums )
//   }
//   digitize(17312413241124) 
