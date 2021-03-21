const videoPopup = document.querySelector(".video-popup");
const video = document.getElementById("player-1");

function toggleVideo() {
    videoPopup.classList.toggle("open-close");
    video.stopVideo();
}