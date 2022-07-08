"use strict";

const rx1 = /abc/;
console.log("Do you know abc?".match(rx1));

const rx2 = new RegExp("abc");
console.log("Do you know abc?".match(rx2));

const rx3 = /[a-z]+a[a-z]+/g;
const st3 = "A man can die but once";
console.log(st3.match(rx3));

const rx4 = /\sg\w*/g;
const st4 =
  "Some are born great, " +
  "some achieve greatness, " +
  "and some have greatness thrust upon them.";
console.log(st4.match(rx4));

console.log("--------------------------");
