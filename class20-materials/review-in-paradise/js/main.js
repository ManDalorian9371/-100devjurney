// // *Variables*
// // Declare a variable, reassign it to your favorite food, and alert the value
// let put = 'dominos'
// put = 'pizza'
// alert(put)
// //Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
// let st = 'mostafa'
// alert(st.charAt(1))

// // *Functions*
// // Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
// function numi(a,b,c) {
//     alert(a*c/b)
// }
// numi(6,4,6)
// // Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
// function guy(num) {
//     console.log(Math.cbrt(num))
// }
// guy(9)
// // *Conditionals*
// //Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
// function mon(moni) {
//    moni = moni.toLowerCase()
//     if (moni === 'june' || moni === 'july' || moni === 'august') {
//         alert('YAY')
//     } else {alert('Booo')}
// }
// mon('June')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function no5(numi){
let cu = 1 ;
while (cu<=numi) {
    if (cu % 5 !== 0) {
        console.log(cu)
    } 
    cu++
}
}
no5(25)

