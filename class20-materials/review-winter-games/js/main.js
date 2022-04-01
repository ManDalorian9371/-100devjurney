//Create a function that takes in an array of numbers. Return a new array 
//containing every even number from the original array (do not use map or filter)
function iti(arr) {
    // let b=[] ;
    // arr.forEach(element => {
    //     if (element % 2 ===0) {
    //     b.push(element)}
    // });
    let b = arr.map(x =>  {
      if   (x%2===0) {
          return x
      }else b.delet(x)} )
    console.log(b)
}

iti([1,2,3,5,12,14])