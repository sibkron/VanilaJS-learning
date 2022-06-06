/* const person = {
  name: "Max",
  age: 25,
  greet: function () {
    console.log("greet");
  },
}; */

const person = new Object({
  name: "Max",
  age: 25,
  greet: function () {
    console.log("greet");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello!");
};

let lena = Object.create(person);
lena.name = "Elena";

const str = new String("string");
