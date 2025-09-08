const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
const OFFSET = 100000;
const line = new Array(OFFSET * 2 + 1).fill(0);

let pos = OFFSET;

for (let i = 0; i < n; i++) {
    const [xStr, dir] = commands[i].split(" ");
    const x = Number(xStr);

    let start, end;

    if (dir === 'L') {
        start = pos - (x - 1);
        end = pos + 1
        for (let j = start; j < end; j++) line[j] = 1;
        pos = pos - (x - 1);
    } else {
        start = pos;
        end = pos + x;
        for (let j = start; j < end; j++) line[j] = 2;
        pos = pos + (x - 1);
    }
}

const w = line.filter(n => n === 1).length;
const b = line.filter(n => n === 2).length;

console.log(w, b)