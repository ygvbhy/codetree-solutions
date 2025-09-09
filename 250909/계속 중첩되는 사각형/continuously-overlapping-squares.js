const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.

const OFFSET = 100
const MAX = 200

let checked = Array.from({ length: MAX + 1}, () => Array(MAX + 1).fill(0));

const check = (xy, rgb) => {
    let [x1, y1, x2, y2] = xy

    x1 += OFFSET;
    x2 += OFFSET;
    y1 += OFFSET;
    y2 += OFFSET;

    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            if (rgb === 'red') checked[x][y] = 2
            else checked[x][y] = 3
        }
    }
}

for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) check(rectangles[i - 1], 'red')
    else check(rectangles[i - 1], 'blue')
}

let area = 0
for (let x = 0; x <= MAX; x++){
    for (let y = 0; y <= MAX; y++){
        if (checked[x][y] === 3) area++
    }
}

console.log(area)