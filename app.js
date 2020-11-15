const icon = document.getElementById('moveableIcon');
let isMoving = false;
let x, y;

icon.onmousedown = event => {
  isMoving = true;
  x = event.offsetX;
  y = event.offsetY;
};

document.onmousemove = event => {
  if (isMoving == true) {
    console.log(x, y)
    icon.setAttribute("style", `left:${x}px; top: ${y}px;`);
    x = event.offsetX;
    y = event.offsetY;
  }
}

document.onmouseup = () => {
  isMoving = false;
  icon.setAttribute("style", `left:${x}px; top: ${y}px;`);
}