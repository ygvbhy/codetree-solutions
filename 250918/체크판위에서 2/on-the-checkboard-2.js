const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.
let answer = 0;
function dfs (r, c, count) {
    if (count === 2) {
        if (grid[R - 1][C - 1] !== grid[r][c] && (R-1 > r) && (C-1 > c)) answer++
        return;
    }

    for (let i = r + 1; i < R; i++) {
        for (let j = c + 1; j < C; j++) {
            if (grid[i][j] !== grid[r][c] && i !== R - 1 && j !== C - 1) {
                dfs(i, j, count + 1)
            }
        }
    }

}

if(grid[0][0] === grid[R-1][C-1]) console.log(0)
else {
    dfs(0, 0, 0)
    console.log(answer)
}
