const hellos = document.getElementsByClassName("hello");

console.log(hellos);
//TMLCollection(5) [h1.hello, h1.hello, h1.hello, h1.hello, div.hello]

const title1 = document.getElementsByTagName("h1");

console.log(title1);
//HTMLCollection(5) [h1.hello, h1.hello, h1.hello, h1.hello, h1]

const h1 = document.querySelector(".hello:first-child h1"); //css코드로 가져옴
//모든 h1을 가져오려면 querySelectorAll 위에는 처음것만 가져옴 .hello: first-child h1이랑 동일 함
console.log(h1);
console.dir(h1);

function handleTitleClick() {
  console.log("title was clicked");
  h1.style.color = "blue";
}

h1.addEventListener("click", handleTitleClick);
//event를 보고싶다면 mdn에서 html element ㄱㄱ
//console창에서도 출력으로 확인가능 사용 가능한 event는 앞에 on이있음

function handleMouseEnter() {
  console.log("mouse is here!");
  h1.innerText = "Mouse is here";
}
function handleMouseLeave() {
  console.log("mouse is gone");
  h1.innerText = "Mouse is gone";
}
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

//titie2.onclick = hadleTitleClick; 으로 호출도 가능 추천은 안함
//mdn에서 window 치면 여러가지 기능 또 나옴

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOD");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
