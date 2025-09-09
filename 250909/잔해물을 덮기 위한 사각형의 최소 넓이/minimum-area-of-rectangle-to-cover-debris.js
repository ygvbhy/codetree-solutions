const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.
const OFFSET = 1000;
const MAX = 2000;

let checked = Array.from({ length: MAX + 1}, () => Array(MAX + 1).fill(0));

const check = (xy, w = false) => {
    let [x1, y1, x2, y2] = xy

    x1 += OFFSET;
    x2 += OFFSET;
    y1 += OFFSET;
    y2 += OFFSET;

    for (let x = x1; x < x2; x++){
        for (let y = y1; y < y2; y++){
            if (w) checked[x][y] = 1
            else checked[x][y] = 0
        }
    }
}

check(rect1, true)
check(rect2)

let area = [MAX + 1, MAX + 1, -MAX - 1, -MAX - 1]
for (let x = 0; x <= MAX; x++){
    for (let y = 0; y <= MAX; y++){
        if (checked[x][y]) {
            area = [Math.min(x, area[0]), Math.min(y, area[1]), Math.max(x, area[2]), Math.max(y, area[3])]
        }
    }
}

const isSame = JSON.stringify(area) === JSON.stringify([MAX + 1, MAX + 1, -MAX - 1, -MAX - 1])
if (isSame) {
    console.log(0)
    return
}

const answer = (area[2] - area[0] + 1) * (area[3] - area[1] + 1)
console.log(answer)