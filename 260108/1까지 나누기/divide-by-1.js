const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let sum = +N;
let count = 0;
for (let i = 1; i <= N; i++) {
    sum = Math.floor(sum / i);
    count++;
    if (sum <= 1) break;
}

console.log(count)