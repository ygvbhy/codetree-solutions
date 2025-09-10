const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.

let max = 0, count = 0, prevNum = 0

for (const num of arr) {
    const sign = num > prevNum ? 1 : -1
    if (sign === 1) {
        count++
    } else {
        count = 1
    }
    prevNum = num
    if (count > max) max = count
}

console.log(max)