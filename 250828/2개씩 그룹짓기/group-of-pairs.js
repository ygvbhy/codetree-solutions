const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const f = (n) => {
    n.sort((a, b) => a - b);
    let num = n.length / 2;
    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        let sum = n[i] + n[n.length - 1 - i];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

console.log(f(nums))