"use strict";

const fs = require("fs");

const print = (err, data) => {
  console.log({ lines: data.toString().split("\n").length });
};

const fileName = "./a.txt";

fs.readFile(fileName, "utf-8", print);

console.log("--------------------------");
