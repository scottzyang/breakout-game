// gameboard
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// ball information
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;

// paddle information
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

// movement
let rightPressed = false;
let leftPressed = false;

// -------------------------------------------------------------------
// keyboard functions
function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

// -------------------------------------------------------------------
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// -------------------------------------------------------------------
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD"
  ctx.fill();
  ctx.closePath();
}

// -------------------------------------------------------------------
function draw() {
  // drawing code
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall();
  drawPaddle();
  x += dx;
  y += dy;

  // reverse direction if top or bottom are hit
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  
  // reverse direction if left or right are hit
  if (y + dy > canvas.height - ballRadius|| y + dy < ballRadius) {
    dy = -dy;
  }
  
  // ball movement
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }
  
}
// -------------------------------------------------------------------
// keyboard event listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


// draw function will be executed every 10 ms
setInterval(draw, 10)