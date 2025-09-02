const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const withIdx = arr.map((v, i) => ({v, i}));

withIdx.sort((a, b) => (a.v - b.v) || (a.i - b.i))

const pos = Array(n)
withIdx.forEach((item, sortedPos) => {
    pos[item.i] = sortedPos + 1
})

console.log(pos.join(" "))