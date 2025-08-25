const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.
function nthNumber(n, memo = new Map([[1, 1], [2, 2]])) {
    if (memo.has(n)) return memo.get(n);
    const v = nthNumber(Math.floor(n / 3), memo) + nthNumber(n - 1, memo);
    memo.set(n, v)
    return v;
}

console.log(nthNumber(n))