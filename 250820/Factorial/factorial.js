const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.
let sum = 1
const f = (i) => {
    if (i === 0) return

    sum *= i
    return f(i - 1)
}


f(N)
console.log(sum)
