/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
//style을 element할때는 css를 쓰는걸 추천함
h1.addEventListener("click", handleTitleClick);
*/
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  /*
  if (h1.className.contains(clickedclass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  } ===  */
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
