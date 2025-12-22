const fs = require("fs");
let N = fs.readFileSync(0).toString().trim().split('\n').filter(n => +n % 2 === 1);

console.log(N.length)