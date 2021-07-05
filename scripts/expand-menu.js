let expandBtn = document.querySelector(".hamburger");
let canvasArea = document.getElementById("canvas");
let fullscreenBtn = document.documentElement;
let fullscreenIcon = document.querySelector(".fas-icon-change");

function expandMenu() {
  this.classList.add("expanded");
}

function closeMenu() {
  expandBtn.classList.remove("expanded");
}

function toggleFullscreen() {
  this.classList.toggle("");
}

function openFullscreen() {
  if (fullscreenBtn.requestFullscreen) {
    fullscreenBtn.requestFullscreen();
  } else if (fullscreenBtn.webkitRequestFullscreen) {
    fullscreenBtn.webkitRequestFullscreen();
  } else if (fullscreenBtn.msRequestFullscreen) {
    fullscreenBtn.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function changeIcon() {
  if (this.classList.contains("fa-expand-alt")) {
    openFullscreen();
    this.classList.remove("fa-expand-alt");
    this.classList.add("fa-compress-alt");
  } else {
    closeFullscreen();
    this.classList.add("fa-expand-alt");
    this.classList.remove("fa-compress-alt");
  }
}

expandBtn.addEventListener("click", expandMenu);
canvasArea.addEventListener("click", closeMenu);
fullscreenIcon.addEventListener("click", changeIcon);
