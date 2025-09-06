const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
const arr = new Array(n).fill(0)
for (let i of segments) {
    for (let j = i[0] - 1; j < i[1]; j++) arr[j] += 1
}

console.log(Math.max(...arr))

