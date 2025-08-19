const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

const solution = (i) => {
    if (i === n + 1) return

    console.log("*".repeat(i));
    i++

    return solution(i)
}

solution(1);