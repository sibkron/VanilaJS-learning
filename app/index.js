"use strict";

const a = 9;
const b = 14;
const c = -9;

const aBinary = a.toString(2);
const bBinary = b.toString(2);
const cBinary = c.toString(2);

console.log(`${a} to base 2: ${aBinary}`);
console.log(`${b} to base 2: ${bBinary}`);
console.log(`${c} to base 2: ${cBinary}`);

console.log("Bitwise operators");

console.log(`${a} & ${b} = ${a & b}`);
console.log(`${aBinary} & ${bBinary} = ${(a & b).toString(2)}`);

console.log(`${a} | ${b} = ${a | b}`);
console.log(`${aBinary} | ${bBinary} = ${(a | b).toString(2)}`);

console.log(`${a} ^ ${b} = ${a ^ b}`);
console.log(`${aBinary} ^ ${bBinary} = ${(a ^ b).toString(2)}`);

console.log(`${a} ?? ${NaN} = ${a ?? NaN}`);
console.log(`${aBinary} ?? ${NaN} = ${(a ?? NaN).toString(2)}`);

console.log(`${a} ?? ${null} = ${a ?? null}`);
console.log(`${aBinary} ?? ${null} = ${(a ?? null).toString(2)}`);

console.log(`${a} ?? ${undefined} = ${a ?? undefined}`);
console.log(`${aBinary} ?? ${undefined} = ${(a ?? undefined).toString(2)}`);

console.log(`${a} ?? ${Infinity} = ${a ?? Infinity}`);
console.log(`${aBinary} ?? ${Infinity} = ${(a ?? Infinity).toString(2)}`);

console.log(`${a} ?? " " = ${a ?? " "}`);
console.log(`${aBinary} ?? " " = ${(a ?? " ").toString(2)}`);

console.log(`${a} ?? 0 = ${a ?? 0}`);
console.log(`${aBinary} ?? 0 = ${(a ?? 0).toString(2)}`);

console.log(`${a} ?? 0 = ${a ?? 0}`);
console.log(`${aBinary} ?? 0 = ${(a ?? 0).toString(2)}`);

console.log(`${~a}  = ${~a}`);
console.log(`${~aBinary} = ${(~a).toString(2)}`);

console.log(`${a << 2}  = ${a << 2}`);
console.log(`${aBinary << 2} = ${(a << 2).toString(2)}`);

console.log(`${a >>> 2}  = ${a >>> 2}`);
console.log(`${aBinary >>> 2} = ${(a >>> 2).toString(2)}`);

console.log(`${a << 2}  = ${a << 2}`);
console.log(`${aBinary << 2} = ${(a << 2).toString(2)}`);

console.log("--------------------------");
