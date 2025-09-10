const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let max = 0, count = 0, prevNum = 0;

for (let num of arr) {
    const sign = num > 0 ? 1 : -1
    if (prevNum === sign) {
        count++
    } else {
        count = 1
    }
    prevNum = sign;
    if (count > max) max = count
}

console.log(max)