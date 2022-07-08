"use strict";

const s = "Hello <user1@domain.> and user2@domain.com";

const rx = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/g;

const m = s.match(rx);

console.dir(m);

const words = (s) => {
  let mySet = new Set(s.toLowerCase().replace(/\W+/g, " ").trim().split(/\s/));
  return [...mySet];
};

const s1 = "Hello World, here we are!";

console.dir(words(s1));
console.dir(words(s1 + s1));

console.log("--------------------------");
