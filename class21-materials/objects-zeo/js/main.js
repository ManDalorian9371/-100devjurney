// //Create a stopwatch object that has four properties and three methods
// let stopWatch = {}
// stopWatch.colur = "red"
// stopWatch.shape = "circle"
// stopWatch.type = "electronic"
// stopWatch.brand = "apple"
// stopWatch.showTime = function show(x) {
//     console.log( "current time is " + x )
// }
// console.log(stopWatch.colur)
function sumDigits(number) {
    let c =0;
    
    number.toString().split('').forEach((x)=>c +=Number(x) )
    console.log(c)
  }
  sumDigits(123345)    