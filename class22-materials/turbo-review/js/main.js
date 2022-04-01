// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, 
// and print the value to the console
let drinki = 'water' 
console.log(drinki)
//Declare a variable, assign it a string of multiple words, and check
// to see if one of the words is "apple".
let fruits = "orange , apple , tomato , carrot"
console.log(fruits.includes('apple'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function game() {
let game1 = ['rock' , 'paper' , 'scissors']
let number = Math.random()*3
number = Math.ceil(number) 
return (game1[number-1])
}
game()            
 
// *Conditionals*      
//Create a function that takes in a choice (rock, paper, or scissors) and determines
// if they won a game of rock paper scissors against a bot using the above function
function play() {
    let x = prompt('take your chance ', '(rock or paper or scissors)')
    const cc = game() 
   
    if (x==cc) {
        re = "you got TIE try again" }
        else if (x== 'paper' && cc=='rock'   || x=='rock' && cc=='scissors'  || x=='scissors'&& cc=='paper') {
            re = 'you win!!!!!'
        } else 
           { re = 'you lost :('}
           let result = `your answer : ${x}  and  computers answer is : ${cc}   and  ${re}`
            return result
    }

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x 
//is the number of choices in the array. Print the results of each game to the console.
function yourArray(arr) {
for (i=0 ;i<Number(arr) ; i++) {
   console.table( play())
}
}

yourArray([2])
