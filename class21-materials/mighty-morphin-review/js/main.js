// *Variables*
// Declare a variable, reassign it to your fav holiday,
// make sure it is in all caps, and print the value to the console
let holi = "bob"
holi = "eyde norooz"
holi = holi.toLocaleUpperCase()
console.log(holi) 
//Declare a variable, assign it a string, alert the last three 
//characters in the string (Use your google-fu and the MDN)
let boo = "mostafajon"
console.log(boo.slice(-3))   
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. 
//Alert the absolute value of the difference. Call the function.
function vali(n1,n2,n3,n4,n5) {
let tot = 100 -n1 -n2 -n3 -n4 -n5
console.log(Math.abs(tot)) 
}
vali(1,45,32,21,2) 

// Create a function that takes in 3 numbers. Console log lowest and highest values.
// Call the function.
function longi(n1,n2,n3) {
    if (n1>n2){}
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. 
//Call the function.
 let b = headsAndTails = () => Math.random() < 0.5 ? 'Heads' : 'Tails' ;
// function headsAndTails() {
//     let b = Math.random()*100 
//     if (b<=50) {console.table("Tails")} else {console.table("Heads")}
// }
          
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails 
//using the previous function x times where x is the number passed into the function. Call the function.
function useChance(x) {
  for (i=0;i<x;i++) { console.log(headsAndTails()) }
}  
useChance(10)        