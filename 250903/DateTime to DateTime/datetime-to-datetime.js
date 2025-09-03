const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

if (A === 11 && (B < 11 || C < 11)) return console.log(-1)

let a = (A - 11) * 24 * 60
let b = (B - 11) * 60
let c = C - 11

console.log(a + b + c)
