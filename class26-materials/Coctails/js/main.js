//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let n = 0;
getDrink(1);
setInterval(slideShow, 3400);

function slideShow(){
	n++;
	getDrink(n);
}
document.querySelector('button').addEventListener('click', slideShow);
function getDrink(ndrink){
	console.log(ndrink);
	const inputDrink = document.getElementById('inputDrinkNumber').value.toLowerCase();
	let addUrl = inputDrink.split('').filter((x) => (x != ' ' ? true : false)).join('');
	let sourceUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${addUrl}`;
	fetch(`${sourceUrl}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.drinks.length);
			//dont let cunter become more than total drink data
			if (ndrink > data.drinks.length) {
				ndrink = 1;
				n = 1;
			} else if (ndrink < 1) {
				ndrink = data.drinks.length;
			}
			// assign variables to informations from data source
			let name = data.drinks[ndrink - 1].strDrink;
			let instructions = data.drinks[ndrink - 1].strInstructions;
			let photoUrl = data.drinks[ndrink - 1].strDrinkThumb;
			//ingredients adding
			document.getElementById('ing1').innerText = `${data.drinks[ndrink - 1].strIngredient1}----->  ${data.drinks[
				ndrink - 1
			].strMeasure1}`;
			document.getElementById('ing2').innerText = `${data.drinks[ndrink - 1].strIngredient2}----->  ${data.drinks[
				ndrink - 1
			].strMeasure2}`;
			document.getElementById('ing3').innerText = `${data.drinks[ndrink - 1].strIngredient3}----->  ${data.drinks[
				ndrink - 1
			].strMeasure3}`;
			document.getElementById('ing4').innerText = `${data.drinks[ndrink - 1].strIngredient4}----->  ${data.drinks[
				ndrink - 1
			].strMeasure4}`;
			document.getElementById('ing5').innerText = `${data.drinks[ndrink - 1].strIngredient5}----->  ${data.drinks[
				ndrink - 1
			].strMeasure5}`;
			document.getElementById('ing6').innerText = `${data.drinks[ndrink - 1].strIngredient6}----->  ${data.drinks[
				ndrink - 1
			].strMeasure6}`;
			// remove null list from ingredients
			for (let i = 1; i < 7; i++) {
				if (data.drinks[ndrink - 1]['strIngredient' + i] == null) {
					document.getElementById(`ing${i}`).innerText = ' ';
				}
			}
			// puting info on DOM
			document.getElementById('picCunt').innerHTML = `${ndrink} /  ${data.drinks.length}`;
			document.querySelector('h2').innerText = name;
			document.querySelector('.h3').innerText = instructions;
			document.querySelector('img').src = photoUrl;
			document.querySelector('img').style.animationFillMode = 'inherit';
			document.querySelector('img').style.animation = '300ms opacity ease-in-out';
			document.querySelector('img').style.opacity = '1';
		})
		.catch((err) => {
			console.log(`error ${err}`);
			document.querySelector('h2').innerText = 'Pls Enter A Valid Drink !';
			document.getElementById('picCunt').innerHTML = '';
			document.querySelector('.h3').innerText = '';
			document.querySelector('.titleIngrid').innerText = 'Try Again';
			document.querySelector('img').src = '';
			for (let i = 1; i < 7; i++) {
				document.getElementById(`ing${i}`).innerText = ' ';
			}
		});
}
