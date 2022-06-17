"use strict";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static from(obj) {
    const { x, y } = obj;
    return new Point(x, y);
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }
}

console.log("function prototype: ", function () {}.prototype);
console.log("lambda prototype: ", (() => {}).prototype);

console.log("Point prototype: ", Point.prototype);
console.log("move prototype: ", Point.prototype.move.prototype);

const p1 = new Point(10, 20);
p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 + "");

console.log("--------------------------");
