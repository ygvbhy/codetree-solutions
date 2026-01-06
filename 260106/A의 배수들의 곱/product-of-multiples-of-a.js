const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let answer = 1;
for (let i = 1; i <= B; i++) {
    if (i % A === 0) answer *= i
}

console.log(answer)