// Initialize variables

var colors = [];
var numSquares = 9;
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupGameMode() {
	for(var i=0;i<modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			modeBtns[2].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy") {
				numSquares = 3;
			} else if (this.textContent === "Medium") {
				numSquares = 6;
			} else {
				numSquares = 9;
			}
			reset();
		});
	}
}



function setupModeButtons() {
	for(var i=0; i<modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			modeBtns[2].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy") {
				numSquares = 3;
			} else if(this.textContent === "Medium") {
				numSquares = 6;
			} else {
				numSquares = 9;
			}
			reset();
		});
	}
}

/*
function setupModeButtons() {
	for(var i=0; i<modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			if(this.textContent === "Easy") {
				numSquares = 3;
			} else if (this.textContent === "Medium") {
				numSquares = 6;
			} else {
				numSquares = 9;
			}
			restart();
		});
	}
}*/


function generateSquares() {
	for (var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetBtn.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#323339";
				messageDisplay.textContent = "Try Again";
			}
 		});
	}
}


function setupSquares() {
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetBtn.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#323339";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function restart() {
	colors = generateRandomColors(numSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "black";
	messageDisplay.textContent = "";
	resetBtn.textContent = "New Colors";
}


function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i=0; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		h1.style.backgroundColor = "black";
		messageDisplay.textContent = "";
		resetBtn.textContent = "New Colors";
	}
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "black";
	messageDisplay.textContent = "";
	resetBtn.textContent = "New Colors";
}

resetBtn.addEventListener("click", function(){
	reset();
});

pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetBtn.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#323339";
				messageDisplay.textContent = "Try Again";
		}
	});
}

//setupGameMode function

/*function setUpGameMode() {
	for(var i=0; i<modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			if(this.textContent === "Easy") {
				numSquares = 3;
			} else if (this.textContent === "Medium") {
				numSquares = 6;
			} else {
				numSquares = 9;
			}
			reset();
		});
	}
}*/



function changeColors(color) {
	for(var i=0; i<squares.length; i++) {
		squares[i].style.background = color;
	}
}


function pickColor() {
	var random = Math.floor(Math.random() * colors.length);	
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i=0; i<num; i++) {
		arr.push(randomColor());
	}
	return arr;
	console.log(arr);
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
} 