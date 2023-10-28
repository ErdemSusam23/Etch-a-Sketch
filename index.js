const container = document.querySelector('.grid-container');
const menu = document.querySelector('.left-menu');
const clearButton = document.querySelector('.clear');
const slider = document.querySelector('.slider');
const output = document.getElementById('size');
let cell = document.createElement('div');

checkMouse();

output.innerHTML = slider.value + 'x' + slider.value;
slider.oninput = function () {
	output.innerHTML = this.value + 'x' + this.value;
};
slider.onchange = function () {
	createCanvas(this.value);
};

let mouseDown = false;

clearButton.addEventListener('click', function () {
	container.innerHTML = '';
	createCanvas(slider.value);
});

function createCanvas(numDivs) {
	container.style.setProperty('--grid-column', numDivs);
	container.style.setProperty('--grid-row', numDivs);
	container.innerHTML = '';
	for (let index = 0; index < numDivs * numDivs; index++) {
		let cell = document.createElement('div');
		// fix color bug
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
	document.body.onmousedown = () => (mouseDown = true);
	document.body.onmouseup = () => (mouseDown = false);
}

createCanvas(20);
