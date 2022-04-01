// //Create an array of movies with at least three movies.
// let bestMovies = ['batman','ironman','lordofthering']
// //Using the array from above, store the first movie in a variable
// let firstMovie = bestMovies[0] 
// alert(firstMovie)
// //Get the length of the original array and store it in a new variable
// let lengthi = bestMovies.length
// //Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
// alert(lengthi)
// let lastMovie = bestMovies[bestMovies.length - 1]
// alert(lastMovie)


function firstNonConsecutive (arr) {
    let c =[] ;
     let d = 0;
    arr.forEach((x,i,a)=>  {
      if (i>0 && x-1 === a[i-1] ) {
        d++
        
      } else if (i>0 &&  x-1 !== a[i-1]) { c += [`${x}`]  }
      
    }
  )
    if (d === arr.length) {
      c=null
    }
  if (c===[]) {
    c= null;
  }
  c = Number(c[0])
  alert(c)
   
  }
  firstNonConsecutive([1,2,3,4,6,7,8])
  firstNonConsecutive([-4,-2,-1,0,1,2,3,4,5])


