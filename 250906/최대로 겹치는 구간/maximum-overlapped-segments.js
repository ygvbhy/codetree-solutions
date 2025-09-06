const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.
let line = new Array(201).fill(0)

for (const [s, e] of segments) {
    for (let i = s; i < e; i++) line[i + 100]++
}

console.log(Math.max(...line))