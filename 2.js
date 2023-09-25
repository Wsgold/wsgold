
var data_y = document.querySelector("#f_data_y")
var data_x = document.querySelector("#f_data_x")

console.log(data_y);

var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext('2d');

var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
  data_y.innerHTML = mouseY
  data_x.innerHTML = mouseX
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.arc(mouseX, mouseY, 20, 0, 2 * Math.PI, true);
  context.fillStyle = "#511112";
  context.fill();

  requestAnimationFrame(update);
}


function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
    while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


canvasPos2 = canvas.getContext('2d');

//  прямоугольник
canvasPos2.beginPath();
canvasPos2.lineWidth="6";
canvasPos2.strokeStyle="#14ff55";
canvasPos2.rect(5,5,290,140); 
canvasPos2.stroke();
const kub = document.querySelector(".sutra");
kub.style. position = 'absolute';

const x_kord = getRandomInt(540) + 'px';
const y_kord = getRandomInt(320) + 'px';

kub.style.left = x_kord;
kub.style.top = y_kord;

// проверка на сравнение координат




update();