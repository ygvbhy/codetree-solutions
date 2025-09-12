const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.
const a = [0], b = [0]
for (const [v, t] of aData) {
    for (let i = 0; i < t; i++) a.push(a[a.length - 1] + v)
}

for (const [v, t] of bData) {
    for (let i = 0; i < t; i++) b.push(b[b.length - 1] + v)
}

let count = 0;
let leader = null
for (let i = 1; i < a.length; i++) {
    const diff = a[i] - b[i]
    if (diff === 0) continue;

    const cur = diff > 0 ? 'a' : 'b'
    if (leader === null) leader = cur
    else if (leader !== cur) {
        count++
        leader = cur
    }
}

console.log(count)