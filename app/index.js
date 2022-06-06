"use strict";

/* const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
  if (counter === MAX_VALUE) {
    console.log("The end");
    clearInterval(timer);
    return;
  }

  console.dir({ counter, date: new Date() });
  counter++;
};

console.log("Begin");
timer = setInterval(event, INTERVAL); */

/* const MAX_VALUE = 10;

console.log("Begin");
for (let i = 0; i < MAX_VALUE; i++) {
  console.dir({ i, data: new Date() });
}
console.log("The end"); */

const add = (a, b) => a + b;

console.log(`Add numbers: 5 + 2 = ${add(5, 2)}`);
console.log(`Add numbers: 5.1 + 2.1 = ${add(5.1, 2.1)}`);
console.log("Concatenate: '5' + '2' = " + add("5", "2"));
console.log(`Substraction: 5 + (-2) = ${add(5, -2)}`);
