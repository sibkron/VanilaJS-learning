"use strict";

const knownObjects = new WeakMap();

const stringfy = (x) => {
  if (knownObjects.has(x)) return knownObjects.get(x);
  else return JSON.stringify(x);
};

const logEverything = (name, obj) => {
  knownObjects.set(obj, name);
  const getHandler = {
    get(target, trapKey, reveiver) {
      return (...args) => {
        console.log(`Trapping ${trapKey}(${args.map(stringfy)})`);
        return Reflect[trapKey](...args);
      };
    },
  };
  const result = new Proxy(obj, new Proxy({}, getHandler));
  knownObjects.set(result, `proxy of ${name}`);
  return result;
};

const fred = { name: "Fred" };
const proxyOfFred = logEverything("fred", fred);
proxyOfFred.age = 42;

console.log("--------------------------");
