orig = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
]


function newGame() {
	for (var i=0;i<20;i++){
		for (var j=0;j<=9;j++) {
			maps[i][j] = 0;
		}
	}
	var rand = Math.round(Math.random() * 4);
	block.x = 5;
	block.y = 0;
	if (rand == 0) {
		block.color = 'red';
	}
	if (rand == 1) {
		block.color = 'blue';
	}
	if (rand == 2) {
		block.color = 'yellow';
	}
	if (rand == 3) {
		block.color = 'green';
	}
	score = 0;
	for (var i=0;i<20;i++){
		for (var j=0;j<=9;j++) {
			orig[i][j] = randomColor();
		}
	}
}

onload = newGame;

var score = 0;
var highScore = 0;
var gameOver = document.getElementById('gameOver');
var newG = document.getElementById('newGame');
var canvas = document.getElementById("canvas");
var canv = document.getElementById("canv");
var scoreInfo = document.getElementById("score");
var highScoreInfo = document.getElementById("highScore");

block = 'block';
none = 'none';
game = {
	end: function() {
		this.status = false;
		gameOver.style.display = 'block';
		canv.style.display = 'none';
		newG.style.display = 'none';
		if (score > highScore) {setHighScore(score);}
	},
	status: false,
	start: function() {
		this.status = true;
		gameOver.style.display = 'none';
		canv.style.display = 'block';
		newG.style.display = 'none';
		newGame();
		score = 0;
		scoreInfo.innerHTML = 'Score: '+score;
	}
}
function randomColor() {
	var icolor = Math.round(Math.random() * 3);
	if (randomColor>3) {
		return randomColor();
	} else {
		return (icolor+1);
	}
}
var indentation;
var maxWidth;
var maxHeight;
setInterval(function() {
	widthScreen = document.body.innerWidth;
	heightScreen = document.body.Height;
	maxWidth =  300;
	maxHeight = 150;
	width = (canvas.offsetHeight / canvas.offsetWidth) / 2 * maxWidth;
	indentation = (maxWidth - 2*width) / 2;
	widthBlock = width / 11;
	context = canvas.getContext("2d");
	context.fillStyle = '#141745';
	context.fillRect(0, 0, maxWidth, maxHeight);
	context.fillStyle = '#4046A7';
	context.fillRect(indentation, 0, width, maxHeight);
	context.fillRect(indentation+width, 0, width, maxHeight);
	context.fillStyle = 'red';
	context.fillRect(indentation+width, 0, 1, maxHeight);
	if (game.status == true) {
		setBlocks();
	}
},100)


keys = {
	left: false,
	right: false,
	down: false
};

onkeydown = function(key) {
	switch (key.keyCode){
		case 37:
			keys.left = true;
			break;
		case 65:
			keys.left = true;
			break;
		case 40:
			keys.down = true;
			break;
		case 83:
			keys.down = true;
			break;
		case 39:
			keys.right = true;
			break;
		case 68:
			keys.right = true;
			break;
	}
};


onkeyup = function(key) {
	switch (key.keyCode) {
		case 37:
			keys.left = false;
			break;
		case 65:
			keys.left = false;
			break;
		case 40:
			keys.down = false;
			break;
		case 83:
			keys.down = false;
			break;
		case 39:
			keys.right = false;
			break;
		case 68:
			keys.right = false;
			break;
	}
}

var maps = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
]

var block = {
	down: function() {
		var test = true;
		if (this.y + 1 < 20) {
			if (maps[this.y + 1][this.x] == 0) {
				this.y += 1;
				time = 0;
				test = false;
			}
			else {
				newBlock(this);
			}
		}
		else {
			newBlock(this);
		}
	},
	left: function() {
		if (this.x - 1 >= 0) {
			if (maps[this.y][this.x-1] == 0) {
				this.x -= 1;
			}
		}
	},
	right: function() {
		if (this.x + 1 <= 19) {
			if (maps[this.y][this.x+1] == 0) {
				this.x += 1;
			}
		}
	},
	x: 5,
	y: 0,
	color: 'red'
};


var time = 0;
setInterval(function() {
	if (game.status == true) {
		time += 1;
		if ((time >= 15 || keys.down === true) && keys.left !== true && keys.right !== true) {
			block.down();
			time = 0;
		}
		if (keys.left === true && keys.right !== true) {
			block.left();
		}
		if (keys.right === true && keys.left !== true) {
			block.right();
		}
		context.fillStyle = block.color;
		context.fillRect(( indentation + block.x*widthBlock), (block.y * widthBlock), widthBlock, widthBlock);
	}
},100)

function setBlocks() {
	for (var i=0;i<20;i++){
		for (var j=0;j<=9;j++) {
			if (maps[i][j]>0) {
				setBlock(maps,j,i, indentation);
			}
			setBlock(orig,j,i,indentation+width+widthBlock)
		}
	}

}

function checkBlock(y,x) {
	if (maps[y][x] == orig[y][x]) {
		score +=maps[y][x];
		scoreInfo.innerHTML = 'Score: '+score;
		if (score > highScore) {
			highScore = score;
			highScoreInfo.innerHTML = "High score: " + score;
		}
	}
}

function setBlock(id,x,y, indentation) {
	var i = id[y][x];
	var color;
	if (i==1) {color='red';}
	if (i==2) {color='blue';}
	if (i==3) {color='yellow';}
	if (i==4) {color='green';}
	if (i>4) {id[x][y] = 0;}
	if (id[y][x]>0) {
		context.fillStyle = color;
		context.fillRect(( indentation + x*widthBlock), (y * widthBlock), widthBlock, widthBlock);
	}
}

function newBlock(id) {
	if (maps[0][5]==0 && game.status == true) {
		var color;
		if (id.color == 'red') {
			color = 1;
		} 
		if (id.color == 'blue') {	
			color = 2;
		} 
		if (id.color == 'yellow') {
			color = 3;
		} 
		if (id.color == 'green') {
			color = 4;
		} 
		maps[id.y][id.x] = color;
		checkBlock(id.y,id.x);
		var rand = Math.round(Math.random() * 4);
		block.x = 5;
		block.y = 0;
		if (rand == 0) {
			block.color = 'red';
		}
		if (rand == 1) {
			block.color = 'blue';
		}
		if (rand == 2) {
			block.color = 'yellow';
		}
		if (rand == 3) {
			block.color = 'green';
		}
	}
	else {
		game.end();
		newGame();
	}
}