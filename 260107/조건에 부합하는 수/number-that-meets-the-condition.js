const fs = require("fs");
let A = fs.readFileSync(0).toString().trim();

const answer = [];

for (let i = 1; i <= A; i++) {
    if (i % 2 === 0 && i % 4 !== 0) continue;
    if (Math.floor(i / 8) % 2 === 0) continue;
    if (i % 7 < 4) continue;

    answer.push(i)
}

console.log(answer.join(' '))