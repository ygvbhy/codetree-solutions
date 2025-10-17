const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const add = a + b + c
const avg = add / 3
const minus = add - avg

console.log(add)
console.log(avg)
console.log(minus)
