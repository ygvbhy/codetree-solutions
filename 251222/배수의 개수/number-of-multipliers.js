const fs = require("fs");
let N = fs.readFileSync(0).toString().trim().split('\n').map(Number);

console.log(N.filter(n => n % 3 === 0).length, N.filter(n => n % 5 === 0).length)