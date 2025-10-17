const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const add = a + b + c

console.log(add)
console.log(Math.floor(add / 3))