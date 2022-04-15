//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
	const choice = document.querySelector('input').value;
	const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			const subclasses = data.subclasses;
			let data2 = '';
			subclasses.forEach((element) => {
				data2 += `<li>${element.index}</li>`;
			});
			document.querySelector('ul').innerHTML = data2;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
console.log('hi');
