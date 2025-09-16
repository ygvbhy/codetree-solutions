const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
let max = 0;
for (let i = 0; i < n; i++) {
    let j = 0;
    while(j <= n) {
        let cnt = 0
        for (let k = j; k < j + 3; k++) {
            if (arr[i][k] === 1) cnt++
        }
        if (n % 3 === 0) j += 3
        else j += n % 3

        max = Math.max(max, cnt)
    }
}

console.log(max)