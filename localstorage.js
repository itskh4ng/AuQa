function displaySelectedOption() {
  const selectedGame = document.getElementById("gamepad").value;
  localStorage.setItem("selectedGame", selectedGame);
}

function saveSelection() {
  const selectedGame = document.getElementById("gamepad").value;
  localStorage.setItem("selectedGame", selectedGame);
}

window.onload = function() {
  const savedGame = localStorage.getItem("selectedGame");
  if (savedGame) {
    document.getElementById("gamepad").value = savedGame;
  }

  setInterval(saveSelection, 30); 
};
