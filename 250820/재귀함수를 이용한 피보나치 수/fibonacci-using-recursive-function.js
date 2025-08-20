const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const fibo = [1, 1]
const f = (i) => {
    if (i === n) return
    fibo[i] = fibo[i - 1] + fibo[i - 2]

    return f(i + 1)
}

f(2)
console.log(fibo[n - 1])