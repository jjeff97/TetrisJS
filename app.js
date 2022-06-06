/** @format */

document.addEventListener("DOMContentLoaded", () => {
	const grid = document.querySelector(".grid");
	let squares = Array.from(document.querySelectorAll(".grid div"));
	const ScoreDisplay = document.querySelector("#score");
	const Startbn = document.querySelector("#start-button");
	const width = 10;

	//Tetrominoes
	const lTetromino = [
		[1, width + 1, width * 2 + 1, 2],
		[width, width + 1, width + 2, width * 2 + 2],
		[1, width + 1, width * 2 + 1, width * 2],
		[width, width * 2, width * 2 + 1, width * 2 + 2]
	];

	const zTetromino = [
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1],
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1]
	];

	const tTetromino = [
		[1, width, width + 1, width + 2],
		[1, width + 1, width + 2, width * 2 + 1],
		[width, width + 1, width + 2, width * 2 + 1],
		[1, width, width + 1, width * 2 + 1]
	];

	const oTetromino = [
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1]
	];

	const iTetromino = [
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3],
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3]
	];
	const theTetrominoes = [
		lTetromino,
		zTetromino,
		tTetromino,
		oTetromino,
		iTetromino
	];

	let currentPostion = 4;
	let currentRotation = 0;

	//randomly select a Tet and its 1st rotation
	let random = Math.floor(Math.random() * theTetrominoes.length);
	let current = theTetrominoes[random][currentRotation];

	//draw the fidst rotation in the first tet
	function draw() {
		current.forEach((index) => {
			squares[currentPostion + index].classList.add("tetromino");
		});
	}

	//undraw the Tet
	function undraw() {
		current.forEach((index) => {
			squares[currentPostion + index].classList.remove("tetromino");
		});
	}

//make the tet move down every second
	timerId = setInterval(moveDown, 1000)

//move down function
	function moveDown() {
		undraw()
		currentPostion += width 
		draw()
	}



});
