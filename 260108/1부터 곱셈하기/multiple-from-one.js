const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let count = 1;
let i;
for (i = 1; i <= N; i++) {
    count *= i;
    if (count >= N) break;
}

console.log(i)