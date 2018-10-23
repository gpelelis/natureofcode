class Walker {
	constructor() {
		this.x = width/2;
		this.y = height/2;
	}

	display() {
		stroke(0);
		point(this.x, this.y);
	}

	step() {
		const choice = Math.trunc(random(4));

		if (choice == 0)
			this.x++;
		else if (choice == 1)
			this.x--;
		else if (choice == 2)
			this.y++;
		else if (choice == 3)
			this.y--;
	}
}

let w;
function setup() {
	createCanvas(640, 360);
	w = new Walker();
	background(255);
}

function draw() {
  w.step();
  w.display();
}
