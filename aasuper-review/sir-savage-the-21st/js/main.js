//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function loop21(){
	for (let i = 1; i <= 21; i++) {
		console.log('21');
		document.getElementById('savageSays').innerText += ' 21 ';
	}
}
loop21();
// Make a list
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
li1.innerText = 'liiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii';
li2.innerText = 'liiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii';
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt){
	// evt.target refers to the clicked <li> element
	// This is different than evt.currentTarget, which would refer to the parent <ul> in this context
	evt.target.style.visibility = 'hidden';
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener('click', hide, false);
