"use strict";

const add = (x) => (y) => {
  const z = x + y;
  console.log(`${x} + ${y} = ${z}`);
  return z;
};

const res = add(3)(6);
console.log(res);

console.log("--------------------------");
