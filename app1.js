const age = parseInt(prompt("How old are you"));

if (isNaN(age)) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want");
}

console.log(age);

//console.dir(document) consol창에 치면 여러가지 나옴
