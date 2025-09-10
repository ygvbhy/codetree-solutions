const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let max = 0, count = 0;

for (const num of arr) {
    const sign = num > t ? 1 : -1
    if (sign === 1) count++
    else count = 1

    if (count > max) max = count
}

console.log(max)