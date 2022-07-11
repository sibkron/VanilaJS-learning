"use strict";

const wrap = (fn) => {
  console.log("Wrap function: ", fn.name);
  return (...args) => {
    console.log("Called wrapper for: ", fn.name);
    console.dir({ args });
    const result = fn(...args);
    console.log("Ended wrapper for: ", fn.name);
    console.dir({ result });
    return result;
  };
};

const func = (part1, part2) => {
  console.dir({ part1, part2 });
  return [part1, part2];
};

func("Uno", "Due");
const wrapped = wrap(func);
wrapped("Tre", "Quatro");

console.log("--------------------------");
