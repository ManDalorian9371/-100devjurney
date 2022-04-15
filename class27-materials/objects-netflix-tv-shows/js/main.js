//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeNetflixTvShow {
	constructor(name, genre, date, maker) {
		this.name = name;
		this.genre = genre;
		this.date = date;
		this.maker = maker;
	}
	play() {
		console.log(`playing ${this.name}`);
	}
	stop() {
		console.log(`stoping ${this.name}`);
	}

	like() {
		console.log(`i like ${this.genre} movies`);
	}
}

let batman = new MakeNetflixTvShow('Batman Rises', 'fantasy', '2010', 'ss');
batman.play();
batman.like();
