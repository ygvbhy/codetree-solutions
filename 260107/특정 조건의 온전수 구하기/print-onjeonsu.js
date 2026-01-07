const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let answer = []

for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) continue;
    if (i % 10 === 5) continue;
    if (i % 3 === 0 && i % 9 !== 0) continue;

    answer.push(i)
}

console.log(answer.join(' '))