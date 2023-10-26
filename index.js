const container = document.querySelector('.grid-container');
let cell = document.createElement('div');

let mouseDown = false;

function createCanvas(numDivs) {
	container.style.setProperty('--grid-column', numDivs);
	container.style.setProperty('--grid-row', numDivs);
	for (let index = 0; index < numDivs * numDivs; index++) {
		let cell = document.createElement('div');
		cell.addEventListener('mouseover', function () {
			changeColor(cell);
		});
		container.appendChild(cell).className = 'grid-item';
	}
}

function changeColor(element) {
	if (mouseDown) {
		element.style.backgroundColor = 'red';
	}
}

function checkMouse() {
	container.onmousedown = () => (mouseDown = true);
	container.onmouseup = () => (mouseDown = false);
}

checkMouse();
createCanvas(16);
