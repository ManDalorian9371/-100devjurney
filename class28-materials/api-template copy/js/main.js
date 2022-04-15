//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
	const choice = document.querySelector('input').value;
	console.log(choice);
	const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=data&format=json`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);

			document.querySelector('h3').innerText = data[`ISBN:${choice}`].title;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
