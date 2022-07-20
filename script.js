// document.querySelector(".message").textContent = "Hola";
// document.querySelector(".guess").value = 7;

let score = 20;
const numeroSecreto = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = " ⛔Intruce un numero";
  } else if (guess === numeroSecreto) {
    document.querySelector(".message").textContent = " 🏆Ganaste!";
    document.querySelector(".number").textContent = numeroSecreto;

    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guess > numeroSecreto) {
    if (score > 0) {
      document.querySelector(".message").textContent = " 📈 Muy alto";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "perdiste 😭";
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".number").textContent = numeroSecreto;
    }
  } else if (guess < numeroSecreto) {
    if (score > 0) {
      document.querySelector(".message").textContent = " 📉 Muy bajo";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "perdiste 😭";
      document.querySelector(".number").textContent = numeroSecreto;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});
