
//Write your pseduo code first! 
document.querySelector('#con').addEventListener('click', convert)

function convert() {
   let temp = document.querySelector('#cyc').value 
   temp = temp *9/5 + 32;
   document.querySelector('#far').innerText = temp ;
}