const express = require('express');
const app = express();

const PORT = 8000;
const games = {
	spiderman: {
		name: 'Spider-Man:MilesMorales',
		Developer: 'Insomniac Games',
		'release date': 'November 12, 2020',
		Platforms: 'PlayStation 4, PlayStation 5'
	},
	godofwar: {
		name: 'God of War',
		Developer: 'Santa Monica Studio, Jetpack Interactive',
		'release date': 'April 20, 2018',
		Platforms: 'PlayStation 4, Microsoft Windows'
	},
	thelastofus: {
		name: 'The Last of Us',
		Developer: 'Naughty Dog',
		'release date': 'June 14, 2013',
		Platforms: 'PlayStation 4, PlayStation 3'
	}
};
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.get('/api/games/:gName', (req, res) => {
	const gameName = req.params.gName;
	const game = games[gameName];
	console.log(game);
	if (game) {
		res.json(game);
	} else {
		res.sendFile(__dirname + '/404.html');
	}
});

app.listen(PORT, (req, res) => {
	console.log(`i am listening on port ${PORT}`);
});
