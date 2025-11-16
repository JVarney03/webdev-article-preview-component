const shareToggle = document.getElementById("open-share-button");
const shareOverlay = document.getElementById("share-overlay");

shareToggle.addEventListener("click", () => {
  shareOverlay.classList.toggle("is-active");
  shareToggle.classList.toggle("is-active");
});
