const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

const m = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
console.log(m[N])