const container = document.querySelector('.container');

function makeDivs(numDivs) {
	for (let index = 0; index < numDivs; index++) {
		let cell = document.createElement('div');
		container.appendChild(cell);
	}
}

makeDivs(256);
