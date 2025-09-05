const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.
const yoilMap = {
  "Mon": 0, "Tue": 1, "Wed": 2, "Thu": 3, "Fri": 4, "Sat": 5, "Sun": 6,
};

const mdays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function dayOfYear(m, d) {
    let s = 0;
    for (let i = 0; i < m - 1; i++) s += mdays[i]
    return s + d
}

const c = dayOfYear(m2, d2) - dayOfYear(m1, d1) + 1
const offset = yoilMap[A]

console.log(1 + Math.floor((c - 1 - offset) / 7))