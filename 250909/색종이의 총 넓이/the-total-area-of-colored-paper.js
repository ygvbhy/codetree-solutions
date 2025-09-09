const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const OFFSET = 100;
const MAX = 200;

let checked = Array.from({ length: MAX + 1}, () => Array.from({ length: MAX + 1}).fill(0))

rects.forEach(xy => {
    let [x1, y1] = xy

    let x2 = x1 + 8
    let y2 = y1 + 8

    x1 += OFFSET
    x2 += OFFSET
    y1 += OFFSET
    y2 += OFFSET

    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) checked[x][y] = 1
    }
})

let area = 0
for(let x = 0; x <= MAX; x++) {
    for (let y = 0; y <= MAX; y++) {
        if (checked[x][y]) area++
    }
}

console.log(area)
