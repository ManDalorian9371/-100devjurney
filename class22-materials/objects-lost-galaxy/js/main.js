//Create a mouse object that has four properties and three methods
let mouse = {
    colur : "blue" ,
    type : "desert" ,
    size : "moderate",
    age : "5yrs" ,
    eatFood : function(x) {x=="cheese" ? "yummi" :"groose" } ,
    jump : function() { alert("i am jumping so high!!!!")} ,
    bite : function() {alert("i will bite you if u tuch me ")}

}
document.addEventListener("click", bili)
function bili() {
document.querySelector("h2").innerText = mouse.colur ; 
alert(mouse.jump())}