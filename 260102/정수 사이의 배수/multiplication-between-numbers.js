const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let count = 0;
let avg = 0;
let sum = 0;

for (let i = A; i <= B; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
        sum += +i
        count++
    // } else if (i % 7 === 0) {
        // sum += +i;
        // count++
    }
}

console.log(sum, (sum / count).toFixed(1))

