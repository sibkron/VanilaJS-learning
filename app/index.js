"use strict";

function fnNew(a, b = "Hello", c = 5) {
  console.dir({ a, b, c });
}

fnNew(1, 2, 3);
fnNew(1, 2);
fnNew(1);
fnNew();

function fnOld(a, b, c) {
  b = b || "Hello";
  c = c || 5;
  console.dir({ a, b, c });
}

fnOld(1, 2, 3);
fnOld(1, 2);
fnOld(1);
fnOld();

function fnHash(args) {
  args.a = args.a || [7, 25, 10];
  args.b = args.c || "Hello";
  args.c = args.c || 5;
  console.dir(args);
}

fnHash({ a: [1, 2, 3], b: "Hi", c: 3 });
fnHash({ b: "World" });
fnHash({ c: 7 });

console.log("--------------------------");
