//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeGame(healths , strengths , staminas , xps) {
    this.health = healths
    this.strength = strengths
    this.stamina = staminas
    this.xp = xps
    this.move = function() { 
        document.querySelector('body').style.justifyContent = 'center'
    }
    
}

let streetFight = new MakeGame(100 , 10 , 25 , 0)
console.log("happy now ? ")

