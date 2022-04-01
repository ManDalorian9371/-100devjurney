// *Variables*
// Create a variable and console log the value
 let mosi = 2; console.log(mosi)
// Create a variable, add 10 to it, and alert the value
let popi = 0 ; popi += 10 ; alert(popi)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subi(a,b,c,d) {
    alert(a-b-c-d)
}
subi(10,5,1,1)

// Create a function that divides one number by another and returns the remainder
function dividi(a,b){
    return a % b
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumi(a,b) {
    let jum = a+b
    if (jum>50){
        alert('jumanji')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function treee(a,b,c) {
    let muli =( a * b * c) % 3
    if (muli ===0) {
        alert(zebra)
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function popo(num,text) {
    let i =0;
    while (i<num) {
        console.log(text)
        i++
    }

}
popo(5,'mostafa')