const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here.
const solution = (i, str) => {
    if (i < 1) {
        return str.trim()
    }

    str += ` ${i}`;
    i--

    return solution(i, str)
}

const solution1 = (i, str) => {
    if (i === n + 1) {
        return str.trim()
    }

    str += ` ${i}`
    i++

    return solution1(i, str)
}

console.log(solution(n, "") + " " + solution1(1, ""))

