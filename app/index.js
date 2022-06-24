"use strict";

const fs = require("fs");

const add = (a, b) => a + b;
const sum = (a, b, callback) => callback(a + b);

console.log("Use add: " + add(5, 2));
sum(5, 2, console.log.bind(null, "Use sum:"));

console.log("--------------------------");

fs.readFile("./a.txt", "utf-8", (err, data) => {
  console.log({ lines: data.toString().split("\n").length });
});

console.log("end");
