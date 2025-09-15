const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

// Please Write your code here.
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dir = 0, x = 0, y = 0

const arr = commands.split('')

for (const cmd of arr) {
    if (cmd === 'L') dir = (dir + 3) % 4;
    if (cmd === 'R') dir = (dir + 1) % 4;

    if (cmd === 'F') {
        x += dx[dir]
        y += dy[dir]
    }
}

console.log(x, y)