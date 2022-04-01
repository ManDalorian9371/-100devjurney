//Create a conditonal that checks their age

document.querySelector('h1').addEventListener('click' ,check) ;

function check() {
    const puti = document.querySelector('#danceDanceRevolution').value
    if (puti <16 ) {
        document.querySelector('p').innerHTML =("they can not drive")
    }
    else if (puti <18 ) {
        document.querySelector('p').innerHTML =("they can't hate from outside the club, because they can't even get in")
    }
    else if (puti <21 ) {
        document.querySelector('p').innerHTML =("they can not drink")
    }
    else if (puti <25 ) {
        document.querySelector('p').innerHTML =("they can not rent cars affordably")
    }
    else if (puti <30 ) {
        document.querySelector('p').innerHTML =("they can not rent fancy cars affordably")
    }
    else  {
        document.querySelector('p').innerHTML =("there is nothing left to look forward too")
    }
}
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
