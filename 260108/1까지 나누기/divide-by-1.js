const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let sum = +N;
let i;
for (i = 1; i <= N; i++) {
    sum /= i
    if (sum <= 1) break;
}

console.log(i)