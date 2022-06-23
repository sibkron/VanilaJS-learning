"use strict";

const logable =
  (fn) =>
  (...args) => {
    const res = fn(...args);
    console.log(`Call: ${fn.name}(${args.join(",")}) Result: ${res}`);
    return res;
  };

//Usage
const sum = (a, b) => a + b;

const wrapped = logable(sum);
wrapped(3, 5);

console.log("--------------------------");
