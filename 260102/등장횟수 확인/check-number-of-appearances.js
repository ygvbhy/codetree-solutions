const fs = require("fs");
let N = fs.readFileSync(0).toString().trim().split('\n').map(Number).filter(n => n % 2 === 0);

console.log(N.length);