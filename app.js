const icon = document.getElementById('moveableIcon');
const iconMenu = document.getElementById('iconMenu');
let isMoving = false;
let x, y, shiftX, shiftY

icon.onmousedown = event => {
  isMoving = true;
  shiftX = event.clientX - icon.getBoundingClientRect().left;
  shiftY = event.clientY - icon.getBoundingClientRect().top;
  x = event.clientX;
  y = event.clientY;
};

document.onmousemove = event => {
  if (isMoving == true) {
    x = event.clientX - shiftX;
    y = event.clientY - shiftY;
    icon.setAttribute("style", `left:${x}px; top: ${y}px;`);
 
  }
};

document.onmouseup = () => {
  isMoving = false;

};

icon.addEventListener('dblclick', function(e) {
  console.log('1')
  iconMenu.style.display = 'flex';
  icon.style.display = 'hidden';
})