const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
console.dir(loginInput);
//const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); //기본 동작을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  /*
  console.log(username);
  console.log(event);
  console.log(event);
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long");
  } else if (username < 5) {
    alert("Your name is too short");
  }
  */
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //== "Hello " + username; 절대 따옴표 아님``
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
//loginButton.addEventListener("click", onLoginBtnClick);
/*
function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}
link.addEventListener("click", handleLinkClick);
*/

const logout = document.querySelector(".logout");
function onLogoutSubmit() {
  greeting.innerText = ``;
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.removeItem(HIDDEN_CLASSNAME);
}

logout.addEventListener("click", onLogoutSubmit);
