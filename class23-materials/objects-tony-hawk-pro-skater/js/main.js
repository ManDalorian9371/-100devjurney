//Create a Tony Hawk Pro Skater constructor that makes fighting
// game characters with 4 properties and 3 methods
function TonyHawk(health , damage , taunt , angry) {
    this.health = health
    this.damage = damage
    this.taunt = taunt
    this.angry = angry
    this.startFight = function(){ console.log(`know this ${this.taunt}`)}
    this.getAngry =   function() {console.log(`${this.angry} ${this.damage} damage`)}
}

let mostafa = new TonyHawk(100,50,"i will crushhh you", "now you see my true")
console.log(mostafa.getAngry())