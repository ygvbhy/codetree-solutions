const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n").map(Number);

let a = input[0];
let b = input[1];

console.log((a + b).toFixed(2));
