const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let max = 0;
let prefMax = arr[0];
for (let j = 2; j < n; j++) {
    max = Math.max(max, arr[j] + prefMax)
    prefMax = Math.max(prefMax, arr[j - 1])
}

console.log(max)