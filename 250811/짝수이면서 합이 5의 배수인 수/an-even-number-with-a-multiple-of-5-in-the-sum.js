const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const check = (n) => {
    let a = n.toString().split("")
    return n % 2 === 0 && (+a[0] + +a[1]) % 5 === 0;
}

if (check(n)) console.log("Yes")
else console.log("No")