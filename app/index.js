"use strict";

const rx1 = /abc/g;
const s11 = "abcdef";
const s12 = s11.replace(rx1, "123");
console.log(s12);

const rx2 = new RegExp("abc", "gi");
const s21 = "abcdefgABCDEFG";
const s22 = s21.replace(rx2, "789");
console.log(s22);

const rx3 = /abc/g;
const s = "abcdefabc";
const res = s.replace(rx3, (sub, pos, str) => {
  console.dir({ sub, pos, str });
  return sub.toUpperCase();
});

console.log(res);

const rx4 = /def/g;
const s1 = "abcdefgabc";
const res1 = s1.search(rx4);
console.log(res1);

const rx5 = /cba/g;
const s2 = "abcdefgabc";
const res2 = s2.search(rx5);
console.log(res2);

console.log("--------------------------");
