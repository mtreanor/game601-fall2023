let cats = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	colorMode(HSB);
	noStroke();
	
	for (let i = 0; i < 1400; i = i + 1) {
		let hue = i / 1400 * 360;
		cats[i] = new Cat(i, height/2, hue);
	}
}

function draw() {
	background(255);
	
	for (let i = 0; i < cats.length; i = i + 1) {
		cats[i].update();
	}
}

// A class defines a potential object (a "blueprint" of an object).
// In the start function above we actually create a bunch of objects that have all
// of the variables and function defined in the class definition below.
// NOTE: The "constructor" function is where we define all of the variable that 
// will live in an "instantiated" object of the class "Cat". 
class Cat {
	constructor(initialX, initialY, h) {
		// This is where we create variables that live within the objects of type Cat
		this.x = initialX;
		this.y = initialY;
		
		this.hue = h;
		
		this.size = random(50, 80);
		
		this.velX = random(-1, 1);
		this.velY = random(-1, 1);
	}
	
	// Btw, in JavaScript you don't write the word "function" in front of function 
	// definitions within class definitions.
	update() {
		this.velX = random(-1, 1);
		this.velY = random(-1, 1);
		
		this.x = this.x + this.velX;
		this.y = this.y + this.velY;

		this.size = this.size + random(-5, 5);
		
		fill(this.hue, 100, 100);
		ellipse(this.x, this.y, this.size);
	}
}