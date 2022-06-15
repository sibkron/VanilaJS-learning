"use strict";

const person = {
  name: "Marcus",
  city: "Roma",
  born: 121,
};

if ("name" in person) {
  console.log(`Person name is ${person.name}`);
}

for (const key in person) {
  const value = person[key];
  console.dir({ key, value });
}

const name = "Marcus Aurelius";
const city = "Roma";

const person1 = { name: name, city: city };
const person2 = { name, city };

const fieldName = "city";
const fieldValue = "Roma";

const person3 = {
  name: "Marcus Aurelius",
  [fieldName]: fieldValue,
};

const person4 = {
  name: "Marcus Aurelius",
  ["city" + "Born"]: fieldValue,
};

function fn(s) {
  return s + "Born";
}

const person5 = {
  name: "Marcus Aurelius",
  [fn("city")]: fieldValue,
};

console.dir({ person1, person2, person3, person4, person5 });

console.log("--------------------------");
