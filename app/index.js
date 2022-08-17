"use strict";

const EventEmitter = require("events");
const Logger = require("./log");

const logger = new Logger();

logger.on("some_event", (args) => {
  const { id, text } = args;
  console.dir({ id, text });
});

logger.log("User logged!");

console.log("--------------------------");
