const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
let sum = 0;
const f = (i) => {
    if (i > n) return

    sum += i
    return f(i + 2)
}

if (n % 2 === 0) f(2)
else f(1)

console.log(sum)