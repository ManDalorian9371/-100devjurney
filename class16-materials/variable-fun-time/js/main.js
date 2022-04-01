//--- Easy
//create a variable and assign it a number
let htee = 5;
//minus 10 from that number
htee -= 10;
//print that number to the console
console.log(htee)
//--- Medium
//create a variable that holds a value from the input
let puti = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
puti += 25 ;
//alert that number
alert(puti)
//--- Hard
//create a variable that holds the h1
let hed = document.querySelector('.hed')
//add an event listener to that element that console logs the sum of the two previous variables
hed.addEventListener('click', sum);

function sum() {puti = document.querySelector('#danceDanceRevolution').value  , console.log(htee + Number(puti) )}