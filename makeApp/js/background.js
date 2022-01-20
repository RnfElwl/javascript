const imges = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = imges[Math.floor(Math.random() * imges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.background = "url(`../img/${chosenImage}`) no-repear";
