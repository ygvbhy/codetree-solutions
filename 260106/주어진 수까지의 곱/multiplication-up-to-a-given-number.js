const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let answer = 1;
for (let i = A; i <= B; i++) {
    answer *= i
}

console.log(answer)