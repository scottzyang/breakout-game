// red rectangle
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD"
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // drawing code
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall();
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
  
}
// draw function will be executed every 10 ms
setInterval(draw, 10)