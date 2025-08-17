const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

const word = new Set(A.split(""))
console.log(word.size >= 2 ? "Yes" : "No")