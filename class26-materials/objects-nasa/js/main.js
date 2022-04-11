//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPic);

function getPic(){
	const date = document.querySelector('input').value;
	fetch(`https://api.nasa.gov/planetary/apod?api_key=yqz5cTZY5xjR0Vt5xDxaRWPeNvkFSvczHsHA5D5A&date=${date}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			let title = data.title;
			let desription = data.explanation;
			let picUrl = data.url;
			document.querySelector('h2').innerText = title;
			document.querySelector('h3').innerText = desription;
			document.querySelector('img').src = `${picUrl}`;
		})
		.catch((err) => console.log('and this is error : ' + err));
}

document.querySelector('img').addEventListener('click', newWindow);
document.querySelector('p').addEventListener('click', newWindow);
function newWindow(){
	window.open(document.querySelector('img').src);
}

document.querySelector('span').addEventListener('click', putRand);
function putRand(){
	let year = Math.floor(Math.random() * 22 + 2000);
	let month = Math.ceil(Math.random() * 12);
	let day = Math.ceil(Math.random() * 30);
	if (month < 10) {
		month = '0' + month;
	}
	if (day < 10) {
		day = '0' + day;
	}
	let putDate = `${year}-${month}-${day}`;

	document.querySelector('input').value = putDate;
}
