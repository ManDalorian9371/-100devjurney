//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
let perFetch = 'https://api.nasa.gov/planetary/apod?api_key=yqz5cTZY5xjR0Vt5xDxaRWPeNvkFSvczHsHA5D5A&date=';
let myFetch = 'https://images-api.nasa.gov/search?q=apollo';

let targetData;
async function searchFetch(){
	try {
		let target = document.querySelector('input').value;
		const respond = await fetch(`https://images-api.nasa.gov/search?q=${target}`);
		const data = await respond.json();
		targetData = data.collection.items;
		return targetData;
	} catch (error) {
		console.log(error);
	}
}
document.querySelector('.search').addEventListener('click', async function searchAndPut(){
	document.querySelector('.search').innerText = 'Search again';
	await searchFetch();
	console.log(targetData);

	let rndNumber = Math.floor(Math.random() * 100);
	console.log(targetData[rndNumber]);
	const respond = await fetch(targetData[rndNumber].href);
	const data = await respond.json();
	console.log(data);
	let iUrl = data.filter((x) => (x.includes('.jpg') ? true : false));
	let vUrl = data.filter((x) => (x.includes('.mp4') ? true : false));
	if (vUrl == [] || vUrl.length == 0) {
		document.querySelector('video').src = '';
		document.querySelector('video').style.display = 'none';
		document.querySelector('h2').innerText = 'There is no video this time just a photo';
		document.querySelector('img').style.display = 'block';
		document.querySelector('img').src = iUrl[0];
	} else {
		document.querySelector('h2').innerText = 'here is your video';
		document.querySelector('img').src = '';
		document.querySelector('img').style.display = 'none';
		document.querySelector('video').style.display = 'block';
		document.querySelector('video').src = vUrl[0];
	}
});
