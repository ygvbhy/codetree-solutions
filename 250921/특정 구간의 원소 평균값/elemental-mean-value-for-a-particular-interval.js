const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let count = 0;

for (let i = 0; i < n; i++) {
    let sum = 0;
    const freq = new Map();

    for (let j = i; j < n; j++) {
        sum += arr[j];
        freq.set(arr[j], (freq.get(arr[j]) || 0) + 1);

        const len = j - i + 1;
        if (sum % len !== 0) continue;

        const avg = sum / len;
        if (freq.has(avg)) count++;
    }
}

console.log(count)