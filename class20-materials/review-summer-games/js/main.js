//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function muli(arr) {
    let b = 1 ;
    arr.forEach((x,i) => {
        b *= x 
    });
    alert(b)
}
muli([2,4,3])