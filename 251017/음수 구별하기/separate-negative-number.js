const fs = require("fs");
let [n] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

console.log(n)
console.log(n < 0 ? 'minus' : '')