"use strict";

{
  const matrix = [
    [7, 10, 1, 5, 2],
    [6, -1, 7, 2, 3],
    [1, 2, 4, -8, 2],
    [-6, 4, 8, 2, 0],
  ];

  const max = (a, b) => (a > b ? a : b);

  const res = matrix
    .map((row) => row.reduce(max))
    .reduce((acc, rowMax) => acc + rowMax);

  console.log(res);

  for (const i in matrix) {
    const row = matrix[i];
    for (const j in row) {
      const col = row[j];
      console.log(i, j, col);
    }
  }

  matrix.forEach((row, i) => {
    row.forEach((col, j) => {
      console.log(i, j, col);
    });
  });
}

let count = 0;
const arr = [7, 10, 1, 5, 2];
const sum = (acc, val) => (count++, acc + val);
const res = arr.reduce(sum);
console.log({ res, count });

console.log("--------------------------");
