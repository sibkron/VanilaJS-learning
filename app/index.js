"use strict";

const indexOf = (arr, defNumber = 0) => {
  return Array.from(arr.entries())
    .filter((i) => i[1] === defNumber)
    .map((i) => i[0]);
};

console.log(indexOf([1, 2, 3, 0, 0, 0, 3, 4, 0, 4, 5, 0, 4, 6]));

console.log("--------------------------");
