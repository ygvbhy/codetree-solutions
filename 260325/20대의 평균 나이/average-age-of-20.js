const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const count = [0, 0];
for (let i = 0; i < input.length; i++) {
    if (input[i] < 30 && input[i] >= 20) {
        count[0] += input[i];
        count[1]++
    } else break;
}
const avg = count[0] / count[1];
console.log(avg.toFixed(2));