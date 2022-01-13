//console.dir(document) consol창에 치면 여러가지 나옴
// document.title = "Hello blabla";로 title 변경 가능

const title = document.getElementById("title");

console.log(title);
title.innerText = "Got you";
console.log(title.id);
console.log(title.className);
