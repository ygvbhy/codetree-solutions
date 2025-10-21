const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

const a = n * n;

console.log(a)
console.log(n < 5 ? 'tiny' : '')