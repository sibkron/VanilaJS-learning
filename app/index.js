"use strict";

const { sin, π } = Math;
const inverse = (f) => (x) => 1 / x;
const cosecant = inverse(sin);

const a = cosecant(5);

console.log(a);

console.log("--------------------------");
