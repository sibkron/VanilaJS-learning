"use strict";

//undefined
let emptyScalar;
console.log({ emptyScalar }, typeof emptyScalar);

//null
const emptyObject = null;
console.log({ emptyObject }, typeof emptyObject);

//NaN
let count = NaN;
console.log({ count }, typeof count);

count = undefined + 1;
console.dir({ count });

console.log(Infinity, -Infinity, typeof Infinity);

let number = 5;
console.log(number ?? emptyScalar);
console.log(number ?? emptyObject);

const s =
  emptyObject === null ? "emtyObject is null" : "emptyObject is not null";
console.log({ s });

console.log({ int2: parseInt("11", 2) });
console.log({ int8: parseInt("11", 8) });
console.log({ int16: parseInt("11", 16) });
console.log({ BigInt }, typeof BigInt);

console.log("--------------------------");
