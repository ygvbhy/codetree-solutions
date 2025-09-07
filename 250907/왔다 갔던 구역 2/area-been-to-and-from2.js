const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const OFFSET = 1000;
const line = new Array(OFFSET * 2 + 1).fill(0)

let pos = OFFSET;
for (let i = 0; i < n; i++) {
    const [xStr, dir] = commands[i].split(' ');
    const x = Number(xStr);

    let newPos = dir === 'L' ? pos - x : pos + x;

    const start = Math.min(pos, newPos);
    const end = Math.max(pos, newPos);

    for (let j = start; j < end; j++) {
        line[j] += 1;
    }

    pos = newPos
}

console.log(line.filter(v => v >= 2).length)