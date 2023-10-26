const container = document.querySelector('.grid-container');
const menu = document.querySelector('.left-menu');
const clearButton = document.createElement('button');
const canvasButton = document.createElement('button');
let cell = document.createElement('div');

canvasButton.innerText = 'Enter Size';

clearButton.classList.add('clear');
clearButton.innerText = 'CLEAR';

menu.appendChild(canvasButton);
menu.appendChild(clearButton);

let mouseDown = false;
let canvasSize;

checkMouse();

canvasButton.addEventListener('click', function () {
	container.innerHTML = '';
	canvasSize = parseInt(prompt('Enter The Size of Canvas'));
	checkCanvasSize(canvasSize);
	console.log(typeof canvasSize);
});

clearButton.addEventListener('click', function () {
	container.innerHTML = '';
});

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

function checkCanvasSize(size) {
	if (size > 100) {
		canvasSize = parseInt(
			prompt('Size cannot be bigger than 100 please enter again')
		);
	} else {
		createCanvas(canvasSize);
	}
}
