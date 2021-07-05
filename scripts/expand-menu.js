let expandBtn = document.querySelector(".hamburger");
let canvasArea = document.getElementById("canvas");
let fullscreen = document.documentElement;
let fullscreenBtn = document.querySelector(".full-screen");
let fullscreenIcon = document.querySelector(".fa-expand-alt");

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
  if (fullscreen.requestFullscreen) {
    fullscreen.requestFullscreen();
  } else if (fullscreen.webkitRequestFullscreen) {
    fullscreen.webkitRequestFullscreen();
  } else if (fullscreen.msRequestFullscreen) {
    fullscreen.msRequestFullscreen();
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
  if (fullscreenIcon.classList.contains("fa-expand-alt")) {
    openFullscreen();
    fullscreenIcon.classList.remove("fa-expand-alt");
    fullscreenIcon.classList.add("fa-compress-alt");
  } else {
    closeFullscreen();
    fullscreenIcon.classList.add("fa-expand-alt");
    fullscreenIcon.classList.remove("fa-compress-alt");
  }
}

expandBtn.addEventListener("click", expandMenu);
canvasArea.addEventListener("click", closeMenu);
fullscreenBtn.addEventListener("click", changeIcon);
