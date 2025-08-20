const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
let cnt = 0;
const f = (n) => {
    if(n === 1) return;

    cnt++
    if (n % 2 === 0) f(n / 2)
    else f(parseInt(n / 3))
}

f(n)
console.log(cnt)