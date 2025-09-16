const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const total = arr.reduce((s, v) => s + v, 0)
const target = Math.floor((total + 1) / 2)

let perf = 0, m = 0;
for (let i = 0; i < n; i++) {
    perf += arr[i]
    if (perf >= target) {
        m = i;
        break;
    }
}

let cost = 0;
for (let i = 0; i< n; i++) {
    cost += arr[i] * Math.abs(i - m)
}

console.log(cost)