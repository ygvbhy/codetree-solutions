const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
let sum = 0;
const solution = (i) => {
    if (n + 1 === i) return;
    sum += i
    return solution(i + 1)
}

solution(1)
console.log(sum)