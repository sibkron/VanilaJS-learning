"use strict";

class Text {
  constructor(s) {
    this.value = s;
  }

  line(a) {
    this.value += "\n" + a;
    return this;
  }

  toString() {
    return this.value;
  }
}

const txt = new Text("line1").line("line2").line("line3").line("line4");

console.log(`${txt}`);

const text1 = (s = "") => ({
  line: (a) => text1(`${s}\n${a}`),
  toString: () => s,
});

const txt1 = text1("line1").line("line2").line("line3").line("line4");
console.log(`${txt1}`);

const text2 = (
  s = "",
  o = {
    line: (a) => ((s += "\n" + a), o),
    toString: () => s,
  }
) => o;

const txt2 = text2("line1").line("line2").line("line3").line("line4");
console.log(`${txt2}`);

console.log("--------------------------");
