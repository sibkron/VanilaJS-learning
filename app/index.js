"use strict";

console.log("Example 1");

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log("Example 2");

{
  let i = 0;
  for (; i < 3; i++) {
    console.log(i);
  }
}

console.log("Example 3");

{
  for (let i = 0; i < 3; ) {
    console.log(i++);
  }
}

let a = 0;
while (a < 10) {
  console.log(a++);
}

let j = 0;
do {
  console.log(j++);
} while (j < 10);

const hash = {
  first: 7,
  second: 10,
  third: 1,
  fourth: 5,
};

hash.fifth = 2;

for (const key in hash) {
  const value = hash[key];
  console.table({
    key: typeof key,
    value: typeof value,
  });
}

console.log("--------------------------");
