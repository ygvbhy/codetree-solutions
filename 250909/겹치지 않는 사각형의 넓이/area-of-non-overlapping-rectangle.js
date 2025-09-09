const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.
const OFFSET = 1000;
const MAX_R = 2000;

const arr = Array.from({ length: MAX_R + 1}, () => Array.from({ length: MAX_R + 1}).fill(0))

function checked (rect, g = true) {
    let [x1, y1, x2, y2] = rect;

    x1 += OFFSET; y1 += OFFSET;
    x2 += OFFSET; y2 += OFFSET;

    for(let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            if (g) arr[x][y] = 1;
            else arr[x][y] = 0;
        }
    }
}

checked(rectA)
checked(rectB)
checked(rectM, false)

let area = 0;
for (let x = 0; x <= MAX_R; x++) {
    for (let y = 0; y <= MAX_R; y++) {
        if (arr[x][y]) area += 1;
    }
}

console.log(area)
