const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];

ctx.lineWidth = 2; //굵기
ctx.moveTo(0, 0); //시작점
function onclick(event) {
  ctx.beginPath(); //초기화
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY); //마우스 위치
  ctx.stroke();
}

canvas.addEventListener("mousemove", onclick);

//家
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();
//person
// ctx.fillRect(210 - 50, 200 - 20, 15, 100);
// ctx.fillRect(350 - 50, 200 - 20, 15, 100);
// ctx.fillRect(260 - 50, 200 - 20, 60, 200);

// ctx.arc(290 - 50, 150 - 20, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(270 - 50, 140 - 20, 8, Math.PI, 2 * Math.PI);
// ctx.arc(305 - 50, 140 - 20, 8, Math.PI, 2 * Math.PI);
// ctx.fill();
