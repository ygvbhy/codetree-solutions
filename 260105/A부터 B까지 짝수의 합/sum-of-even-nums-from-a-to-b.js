const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let count = 0;
for (let i = a; i <= b; i++) {
    if (i % 2 === 0) count += i
}

console.log(count)