const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(n => Math.abs(n));

// Please Write your code here.

console.log(arr.join(" "))