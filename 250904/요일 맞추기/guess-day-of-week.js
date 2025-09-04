const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.
const d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const mdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function dayOfYear(m, d) {
    let sum = 0;
    for (let i = 0; i < m - 1; i++) sum += mdays[i]
    return sum + d
}

const c = dayOfYear(m2, d2) - dayOfYear(m1, d1)
const idx = (1 + (c % 7) + 7) % 7;
console.log(d[idx])
