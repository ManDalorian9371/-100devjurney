const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
const MongoClient = require('mongodb').MongoClient;
// Make sure you place body-parser before your CRUD handlers!

MongoClient.connect(
	'mongodb+srv://ManDalorian:e1561373@mandalorian.6qx5s.mongodb.net/?retryWrites=true&w=majority',
	{
		useUnifiedTopology: true
	},
	(err, client) => {
		if (err) return console.error(err);
		console.log('Connected to Database');
		const db = client.db('It-is-My-DATABASE');
		const quotesCollection = db.collection('quotes');
		app.use(bodyParser.urlencoded({ extended: true }));

		app.get('/style.css', (req, res) => {
			res.sendFile(__dirname + '/style.css');
		});
		app.post('/quotes', (req, res) => {
			quotesCollection
				.insertOne(req.body)
				.then((result) => {
					res.redirect('/');
				})
				.catch((error) => console.error(error));
		});
		app.get('/', (req, res) => {
			res.sendFile(__dirname + '/index.html');
			db
				.collection('quotes')
				.find()
				.toArray()
				.then((results) => {
					console.log(results);
				})
				.catch((error) => console.error(error));
		});
		app.listen(3000, function(){
			console.log('I AM LISTENING');
		});
	}
);
