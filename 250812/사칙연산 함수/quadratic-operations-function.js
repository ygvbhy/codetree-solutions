const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

if (o === "+") console.log(`${a} ${o} ${c} = ${a + c}`)
else if (o === '-') console.log(`${a} ${o} ${c} = ${a - c}`)
else if (o === '*') console.log(`${a} ${o} ${c} = ${a * c}`)
else if (o === '/')console.log(`${a} ${o} ${c} = ${Math.floor(a / c)}`)
else console.log("False")