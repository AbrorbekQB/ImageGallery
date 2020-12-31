const panels = document.querySelectorAll(".panel");

function toggleOpen(evt) {
  panels.forEach(panel => {
    if (panel.classList.contains("open")&&evt.target.dataset.panel !== panel.dataset.panel) {
      panel.classList.toggle("open");
    }
  });
  this.classList.toggle("open");
}

function toggleActive(evt) {
  if(evt.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));