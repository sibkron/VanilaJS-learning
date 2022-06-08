"use strict";

const cities = ["Athens", "Roma", "London", "Beijing", "Kiev", "Riga"];
const f = (s) => s.length;

function f1() {
  const cities = ["Athens", "Roma"];
  const f = (s) => s.toUpperCase();
  console.dir({ cities });
  console.dir(cities.map(f));

  {
    const f = (s) => s.toLowerCase();
    console.dir({ cities });
    console.dir(cities.map(f));
  }
  {
    const cities = ["London", "Beijing", "Kiev"];
    console.dir({ cities });
    console.dir(cities.map(f));
  }
}

f1();

console.dir({ cities });
console.dir(cities.map(f));

const power = Math.pow;
const square = (x) => power(x, 2);
const cube = (x) => power(x, 3);

console.log(power(10, 2));
console.log(square(10));
console.log(power(10, 3));
console.log(cube(10));

console.log("--------------------------");
