"use strict";

const person = {
  name: "Marcus",
  city: "Roma",
  born: 121,
};

console.log(`Person name is ${person.name}`);
console.log(`Person name is ${person["name"]}`);

delete person.name;
console.dir({ person });

delete person["city"];
console.dir({ person });

const person2 = {
  name: "Marcus Aurelius",
  get getCity() {
    return this.city;
  },
  set setCity(value) {
    this.city = value;
  },
};

person2.setCity = "Kiev";
console.dir({ person2 });

console.log("--------------------------");
