const openShare = document.getElementById("open-share-button");
const closeShare = document.getElementById("close-share-button");
const shareOverlay = document.getElementById("share-overlay");

openShare.addEventListener("click", () => {
  shareOverlay.classList.toggle("is-active");
});

closeShare.addEventListener("click", () => {
  shareOverlay.classList.toggle("is-active");
});
