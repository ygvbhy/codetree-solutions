const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

let answer = 0;
let x = 1, y = 3;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let cnt = 0
        for (let k = 0; k < dx.length; k++) {
            let nx = i + dx[k], ny = j + dy[k];
            if (inRange(nx, ny)) {
                if (grid[nx][ny] === 1) {
                    cnt += 1;
                }
            }
        }
        if (cnt >= 3) answer++
    }
}

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

console.log(answer)