const { UserName: user, sayHi } = require("./test");
const os = require("os");

const name = "Tommy";

console.log(sayHi("Tommy"));
console.log(os.platform(), os.release());

module.exports = name;
