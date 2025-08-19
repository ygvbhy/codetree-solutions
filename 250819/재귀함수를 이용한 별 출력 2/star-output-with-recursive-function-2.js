const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

const solution = (n) => {
    if (n === 0) return;

    console.log(Array(n).fill("*").join(" "))
    solution(n - 1);
    console.log(Array(n).fill("*").join(" "))
}

solution(n)