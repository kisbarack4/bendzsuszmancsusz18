const letterButton = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");
const toast = document.getElementById("toast");

letterButton.addEventListener("click", () => {
  const isOpen = letterContent.classList.toggle("show");
  letterContent.setAttribute("aria-hidden", String(!isOpen));
  letterButton.innerHTML = isOpen
    ? 'CLOSE THE LETTER <span>↗</span>'
    : 'OPEN THE LETTER <span>↗</span>';
  if (isOpen) letterContent.scrollIntoView({ behavior: "smooth", block: "center" });
});
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

music.volume = 0.25;

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "♫ ZENE KIKAPCSOLÁSA";
    } catch (error) {
      musicButton.textContent = "A ZENE NEM INDÍTHATÓ";
    }
  } else {
    music.pause();
    musicButton.textContent = "♫ ZENE BEKAPCSOLÁSA";
  }
});
document.querySelectorAll(".photo-card").forEach((card) => {
  card.addEventListener("click", () => {
    toast.textContent = card.dataset.caption;
    toast.classList.add("show");
    window.clearTimeout(card.toastTimer);
    card.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  });
});
