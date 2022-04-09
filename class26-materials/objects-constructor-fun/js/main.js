//Create a constructor with 4 properties and 3 methods
function MyLaptop(nameOfOwner, color, brand, yearMade, size){
	this.nameOfOwner = nameOfOwner;
	this.color = color;
	this.brand = brand;
	this.yearMade = yearMade;
	this.size = size;
	this.turnOn = function(){
		console.log('Welcome Back ' + this.nameOfOwner);
	};
	this.turnOff = function(){
		console.log('Saving ... Turning Off ' + this.brand);
	};
	this.playMovie = function(){
		console.log('Once Upon A Time ...');
	};
}

const MostafaLap = new MyLaptop('Mostafa', 'black', 'Asus', '2015', '15in');
