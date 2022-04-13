//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('#clickToExpand').style.display = 'none';
document.querySelector('#borderi1').classList.remove('active');
document.querySelector('#borderi2').classList.remove('active');
document.querySelector('button').addEventListener('click', getPic);
document
	.querySelector('input')
	.addEventListener('change', () => (document.querySelector('button').innerText = 'Get Picture of this Date'));

function getPic(){
	document.querySelector('.center').style.display = 'flex';
	const date = document.querySelector('input').value;
	document.querySelector('body').style.background =
		"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80')";
	if (date.split('-')[0] > 2022 || (date.split('-')[0] < 1995 && date != '')) {
		document.querySelector('h2').innerText = 'Try dates between 1995 - 2022 (NASA database)';
	} else {
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
				document.querySelector('#borderi1').classList.add('active');
				document.querySelector('#borderi2').classList.add('active');
				document.querySelector('#clickToExpand').style.display = '';
				setTimeout(() => (document.querySelector('.center').style.display = 'none'), 10);
			})
			.catch((err) => console.log('and this is error : ' + err));
	}
}

document.querySelector('img').addEventListener('click', newWindow);
document.querySelector('#clickToExpand').addEventListener('click', newWindow);
function newWindow(){
	window.open(document.querySelector('img').src);
}

document.querySelector('span').addEventListener('click', putRand);
function putRand(){
	document.querySelector('button').innerText = 'Get Picture of this Date';
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

// get date
var today = new Date();
var initialDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
console.log(initialDate);
