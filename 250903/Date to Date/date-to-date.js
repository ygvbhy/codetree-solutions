const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function dayOfYear(m, d) {
    let sum = 0;
    for (let i = 0; i < m - 1; i++) sum += num_of_days[i]
    return sum + d
}

const a = dayOfYear(m1, d1)
const b = dayOfYear(m2, d2)
console.log(a === b ? 1 : b - a)