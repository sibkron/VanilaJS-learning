"use strict";

const newYearsEve = new Date(1999, 11, 31, 23, 59);
const arrLocales = ["de-CH", "de", "en"];
console.log(newYearsEve.toLocaleString("de"));
console.log(newYearsEve.toLocaleString(arrLocales));
console.log(newYearsEve.toLocaleString("de", { timeZone: "Asia/Tokyo" }));
console.log(newYearsEve.toLocaleString("de", { dateStyle: "medium" }));
console.log(newYearsEve.toLocaleString([], { timeZone: "Asia/Tokyo" }));

let number = 123456.78;
console.log(number.toLocaleString("de"));

let formatter = new Intl.NumberFormat("de");
console.log(formatter.format(number));

console.log("--------------------------");
