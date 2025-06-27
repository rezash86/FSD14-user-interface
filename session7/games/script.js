const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let target = { x: 100, y: 100, size: 40 };
let score = 0;

function drawTarget() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(target.x, target.y, target.size, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();

  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, 10, 30);
}

canvas.addEventListener("click", function (e) {
  alert("clicked");
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const dx = mouseX - target.x;
  const dy = mouseY - target.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < target.size) {
    score++;
    moveTarget();
  }
  drawTarget();
});

function moveTarget() {
  target.x = Math.random() * (canvas.width - 2 * target.size) + target.size;
  target.y = Math.random() * (canvas.height - 2 * target.size) + target.size;
}

// Initial draw
drawTarget();
