"use strict";

class RangeIterator {
  constructor(current, last) {
    this.current = current;
    this.last = last;
  }
  next() {
    if (this.current < this.last) {
      const result = { value: this.current };
      this.current++;
      return result;
    } else {
      return { done: true };
    }
  }
}
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  [Symbol.iterator]() {
    return new RangeIterator(this.start, this.end);
  }
}

for (const element of new Range(10, 20)) {
  console.log(element);
}

function* rangeGenerator(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

function* flatArrayGenerator(arr) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* flatArrayGenerator(element);
    } else {
      yield element;
    }
  }
}

const result = [...flatArrayGenerator([1, [2, [3, 4], 5], 6])];
console.log(result);

console.log("--------------------------");
