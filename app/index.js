"use strict";

const rx1 = /abc/;
console.log("Do you know abc?".match(rx1));

const rx2 = new RegExp("abc");
console.log("Do you know abc?".match(rx2));

const rx3 = /[a-z]+a[a-z]+/g;
const st3 = "A man can die but once";
console.log(st3.match(rx3));

console.log("--------------------------");
