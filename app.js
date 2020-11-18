const icon = document.getElementById('moveableIcon');
let isMoving = false;
let x, y;

icon.onmousedown = event => {
  isMoving = true;
  x = event.clientX;
  y = event.clientY;
};

document.onmousemove = event => {
  if (isMoving == true) {
    x = event.clientX;
    y = event.clientY;
    icon.setAttribute("style", `left:${x}px; top: ${y}px;`);
 
  }
};

document.onmouseup = () => {
  isMoving = false;
  icon.setAttribute("style", `left:${x}px; top: ${y}px;`);
};