const container = document.querySelector('.grid-container');
const menu = document.querySelector('.left-menu');
const clearButton = document.querySelector('.clear');
const slider = document.querySelector('.slider');
const output = document.getElementById('demo');
let cell = document.createElement('div');

checkMouse();

output.innerHTML = slider.value + 'x' + slider.value;
slider.onchange = function () {
	output.innerHTML = this.value;
	createCanvas(this.value);
};

clearButton.classList.add('clear');
clearButton.innerText = 'CLEAR';

menu.appendChild(canvasButton);
menu.appendChild(clearButton);

let mouseDown = false;
let canvasSize;

clearButton.addEventListener('click', function () {
	container.innerHTML = '';
});

function createCanvas(numDivs) {
	container.style.setProperty('--grid-column', numDivs);
	container.style.setProperty('--grid-row', numDivs);
	container.innerHTML = '';
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
