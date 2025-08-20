const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
let sum = 0;
const f = (n) => {
    if (n === 0) return

    sum += (n % 10) ** 2
    return f(parseInt(n / 10));
}

f(n)
console.log(sum)