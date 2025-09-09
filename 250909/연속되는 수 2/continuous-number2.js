const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let max = 0;
let count = 0;
let stack = []

for (let i = 0; i < n; i++) {
    if (stack.length === 0) {
        stack.push(arr[i])
        count++
        max++
        continue;
    }

    const top = stack[stack.length - 1]
    if (top === arr[i]) {
        stack.push(arr[i])
        count++
        continue;
    } else {
        stack = []
        stack.push(arr[i])
        max = max > count ? max : count
        count = 1
    }
}

console.log(max)