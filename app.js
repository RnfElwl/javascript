//alert("hi");

console.log(54454545454);
console.log("lalalalalalala");
console.log(5 / 2);
console.log(5 * 2);
console.log(5 + 2);

const n = 5.1;

console.log(n + 2);

const veryLongName = 0; // 이게 보통
const very_long_name = 10;

console.log(very_long_name);

const myName = "Elwl";

console.log("hello " + myName);

let youName = "Elwl";

console.log("hello " + youName);

youName = "james";

console.log("bye " + youName);
/*
myName = "thif";
console.log("bye " + myName); error
*/

var a = 5; //const>let>>>>>>>>>>>>>>>>>>>>>>>>>>var var은 안씀

const amIShort = false;

const login = true;
const loding = false;
const notThing = null;
let something;

console.log(notThing);
console.log(something);

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const list = [1, 2, "hello", false, null, true, undefined, "Elwl"];

console.log(dayOfWeek, list);

//Get Item from Array
console.log(dayOfWeek[0]);
console.log(dayOfWeek[123231212321]);

//Add one more day to the array
dayOfWeek.push("sun");

console.log(dayOfWeek);

const player = {
  //구조체 같은거 object라고함 javascript에서
  name: "Elwl",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
player.fat = false;
player.lastName = "Rnf";
player.points = player.points + 15;
console.log(player);

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + "I'm " + age);
}

sayHello("nico", 30);
sayHello("Elwl", 19);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function divide(a, b) {
  console.log(a / b);
}
plus();
plus(8, 60);
divide(98, 20);

const player1 = {
  name: "Elwl",
  sayHello: function (otherPersonName) {
    console.log("hello! " + otherPersonName + " nice to meet you");
  },
};

console.log(player1.name);
player1.sayHello("lynn");

function plus(a, b) {
  console.log(a + b);
}
plus(5, 5);

//const 대부분 >> let가끔 >>>>>>>>>>>>var 안씀
