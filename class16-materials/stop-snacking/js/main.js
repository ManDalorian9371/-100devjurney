//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', helpi)
function helpi() {
const snaki = Number(document.querySelector('#snakNum').value)
document.querySelector('#stops').innerHTML = ''
for (i=0; i<snaki;i++) {
document.querySelector('#stops').innerHTML += '  stop'}
}
