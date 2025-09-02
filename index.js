const box = document.getElementById("box");
const box1 = document.getElementById("box1")
document.addEventListener("keydown", (e) => {
  // D = sağa
  if (e.keyCode === 68) {
    let current = parseInt(box.style.marginLeft) || 0;
    box.style.marginLeft = (current + 1) + "px";
  }

  // A = sola
  if (e.keyCode === 65) {
    let current = parseInt(box.style.marginLeft) || 0;
    box.style.marginLeft = (current - 1) + "px";
  }
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 39) {
    let current = parseInt(box1.style.marginLeft) || 0;
    box1.style.marginLeft = (current + 1) + "px";
  }

  if (e.keyCode === 37) {
    let current = parseInt(box1.style.marginLeft) || 0;
    box1.style.marginLeft = (current - 1) + "px";
  }
});