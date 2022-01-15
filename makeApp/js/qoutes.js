const quotes = [
  { quote: "aaaaaaaaaaaaaaaaaaa", author: "AAAAAAAAAAAAAAA" },
  { quote: "bbbbbbbbbbbbbbbbbbbbb", author: "BBBBBBBBBBB" },
  { quote: "ccccccccc", author: "CCCCCCCCCC" },
  { quote: "ddddddddddddddd", author: "DDDDDDDDDDDDDDDDDDD" },
  { quote: "eeeeeeeeeeeee", author: "EEEEEEEEEEEEEEE" },
  { quote: "fffffff", author: "FFFFFFFFFFFF" },
  { quote: "gggggggggggggg", author: "GGGGGGGGGGGGGG" },
  { quote: "hhhhhhhhhhhhhhh", author: "HHHHHHHHHHHHH" },
  { quote: "iiiiiiiiiiiiiiii", author: "IIIIIIIIIIIIIIIII" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
