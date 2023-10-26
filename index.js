const container = document.querySelector('.grid-container');
let cell = document.createElement('div');

let mouseDown = true;

function createCanvas(numDivs) {
	for (let index = 0; index < numDivs * numDivs; index++) {
		let cell = document.createElement('div');
		cell.addEventListener('mouseover', changeColor(cell));
		container.appendChild(cell).className = 'grid-item';
	}
}

function changeColor(element) {
	if (mouseDown) {
		element.addEventListener('mouseover', function () {
			element.style.backgroundColor = 'red';
		});
	}
}

function checkMouse() {
	document.body.addEventListener('onmousedown', function () {
		mouseDown = true;
	});
	document.body.addEventListener('onmouseup', function () {
		mouseDown = false;
	});
	console.log(mouseDown);
}

checkMouse();
createCanvas(16);
