const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
for (let i = Math.min(A, B); i <= Math.max(A, B); i++) {
    if (i % 5 === 0) sum += +i
}

console.log(sum)
