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

	let currentPosition = 4;
	let currentRotation = 0;

	//randomly select a Tet and its 1st rotation
	let random = Math.floor(Math.random() * theTetrominoes.length);
	let current = theTetrominoes[random][currentRotation];

	//draw the fidst rotation in the first tet
	function draw() {
		current.forEach((index) => {
			squares[currentPosition + index].classList.add("tetromino");
		});
	}

	//undraw the Tet
	function undraw() {
		current.forEach((index) => {
			squares[currentPosition + index].classList.remove("tetromino");
		});
	}

	//make the tet move down every second
	timerId = setInterval(moveDown, 500);

	//assign functions to keyCodes
	function control(e) {
		if (e.keyCode === 37) {
			moveLeft();
		} else if (e.keyCode === 38) {
			rotate();
		} else if (e.keyCode === 39) {
			moveRight();
		} else if (e.keyCode === 40) {
			moveDown();
		}
	}
	document.addEventListener("keyup", control);

	//move down function
	function moveDown() {
		undraw();
		currentPosition += width;
		draw();
		freeze();
	}
	// freeze function
	function freeze() {
		if (
			current.some((index) =>
				squares[currentPosition + index + width].classList.contains("taken")
			)
		) {
			current.forEach((index) =>
				squares[currentPosition + index].classList.add("taken")
			);
			//start a new Tet following
			random = Math.floor(Math.random() * theTetrominoes.length);
			current = theTetrominoes[random][currentRotation];
			currentPosition = 4;
			draw();
		}
	}

	function moveLeft() {
		undraw();
		const isAtLeftEdge = current.some(
			(index) => (currentPosition + index) % width === 0
		);

		if (!isAtLeftEdge) currentPosition -= 1;

		if (
			current.some((index) =>
				squares[currentPosition + index].classList.contains("taken")
			)
		) {
			currentPosition += 1;
		}

		draw();
	}

	//move tet right, unless there is an edge or blockage

	function moveRight() {

		undraw()
		const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
		
		if (!isAtRightEdge) currentPosition += 1

		if (current.some(index => squares[currentPosition + index].classList.constains('taken'))) {
			currentPosition -=1
		}
		
	}

});
