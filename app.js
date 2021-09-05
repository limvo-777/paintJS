const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// canvas 의 pixel 동작을 위한 크기 지정
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(event) {
  painting = false;
}

function startPainting(event) {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
//event.clientX,Y => 윈도우 좌표 (윈도우 사이즈 작업일 경우 offset과 차이가 없음)
//!painting일 때 path 시작점 생성 -> painting 될 때 좌표 이동후 stroke
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
