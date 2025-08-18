const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

const solution = () => {
    let cnt = 0;
    let num = m
    while(num >= 1) {
        cnt += A[num - 1]

        if (num % 2 === 0) num /= 2;
        else num -= 1
    }

    return cnt
}

console.log(solution())