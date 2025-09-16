const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let min = 1000000000
for (let i = 0; i < n; i++) {
    // 이전 집
    let cnt = 0;
    let range = 1
    for (let j = i - 1; j >= 0; j--) {
        cnt += arr[j] * range++
    }
    range = 1
    for (let j = i + 1; j < n; j++){
        cnt += arr[j] * range++
    }

    min = Math.min(min, cnt)
}

console.log(min)