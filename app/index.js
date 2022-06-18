"use strict";

const f = (arr) => arr.map((x) => x * 2);
const collect = (...arr) => arr;
const mapCollect = (values, f, collect) => {
  let res = f(values);
  console.log(res);
  return collect(res);
};

console.log(mapCollect([1, 2, 3, 4, 5], f, collect));

console.log("--------------------------");
