const text = document.querySelector(".choose");
const choice = document.querySelector(".ice-cream");

function yourChoice(n) {
  text.innerText = "your choose " + n.target.value;
}

choice.addEventListener("change", yourChoice);
