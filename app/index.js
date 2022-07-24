"use strict";

const Text = function (s) {
  this.value = s;
};

Text.prototype.line = function (a) {
  this.value += "\n" + a;
  return this;
};

Text.prototype.toString = function () {
  return this.value;
};

//Usage
const txt = new Text("line1").line("line2").line("line3").line("line4");

console.log(`${txt}`);

console.log("--------------------------");

const text = (s = "") => ({
  line: (a) => text(s + "\n" + a),
  toString: () => s,
});

const txt1 = text("line1").line("line2").line("line3").line("line4");

console.log(`${txt1}`);

console.log("--------------------------");
