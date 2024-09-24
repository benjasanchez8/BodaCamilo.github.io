var audio = document.getElementById("background-music");
var musicButton = document.getElementById("music-button");
var musicIcon = document.getElementById("music-icon");

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    musicIcon.classList.remove("fa-play");
    musicIcon.classList.add("fa-pause");
    musicButton.classList.add("playing"); // Añadir clase 'playing' cuando se reproduce la música
  } else {
    audio.pause();
    musicIcon.classList.remove("fa-pause");
    musicIcon.classList.add("fa-play");
    musicButton.classList.remove("playing"); // Remover clase 'playing' cuando se pausa la música
  }
}

window.onload = function () {
  audio.play().catch(function () {
    musicIcon.classList.add("fa-play");
    document.body.addEventListener(
      "click",
      function () {
        audio.play();
        musicIcon.classList.remove("fa-play");
        musicIcon.classList.add("fa-pause");
        musicButton.classList.add("playing"); // Añadir clase 'playing' cuando se reproduce la música
      },
      { once: true }
    );
  });

  // Set the wedding date
  const weddingDate = new Date("December 21, 2024 00:00:00").getTime();

  // Update the countdown every second
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "¡Es el gran día!";
    }
  }, 1000);
};
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");

function showItems() {
  items.forEach((item, index) => {
    item.style.display = index >= currentIndex && index < currentIndex + 3 ? "block" : "none";
  });
}

function nextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  showItems();
}

// Inicializar
showItems();
setInterval(nextItem, 3000); // Cambiar cada 3 segundos
