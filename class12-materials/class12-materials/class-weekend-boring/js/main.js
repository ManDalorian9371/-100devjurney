document.querySelector('#check').addEventListener('click', check)

let dtype = "none"
function check() {

  const day = document.querySelector('#day').value.toLowerCase

  //Conditionals go here
  
if (day === "saturday" || day === "sunday" || day === "Saturday" || day === "Sunday") { 
   alert("weekend!")
   
  dtype = "weekend" 
  document.querySelector('#placeToSee').innerHTML = dtype  }
   else if (day === "tuesday" || day === "thursday") {
    dtype = "class day"
     document.querySelector('#placeToSee').innerHTML = dtype
   }
   else {
    dtype = "boriiiiiiiiiiiiiiiiiing day"
     document.querySelector('#placeToSee').innerHTML = dtype
   }


  }
  