const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.
const start = [0, 0]
for (const i of moves) {
    const [s, num] = i.split(" ")
    if (s === 'N') {
        start[1] += +num
    }
    else if (s === 'E') {
        start[0] += +num
    }
    else if (s === 'S') {
        start[1] -= num
    }
    else if (s === 'W') {
        start[0] += num
    }
}

console.log(start.join(' '))