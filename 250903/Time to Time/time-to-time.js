const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.
let s = a * 60 + b
let e = c * 60 + d
console.log(e - s)