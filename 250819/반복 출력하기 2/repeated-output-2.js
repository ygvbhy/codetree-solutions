const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const solution = (n, i) => {
    if (n === i) return;

    console.log("HelloWorld")
    i += 1

    return solution(n, i)
}

solution(n, 0)