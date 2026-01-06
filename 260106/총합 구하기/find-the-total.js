const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let count = 0;
for (let i = A; i <= B; i++) {
    if (i % 6 === 0 && i % 8 !== 0) count += i
}

console.log(count)