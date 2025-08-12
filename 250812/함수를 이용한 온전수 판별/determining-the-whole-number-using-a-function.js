const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.
let cnt = 0;
for (let i = a; i <= b; i++) {
    let n = i.toString().split("");
    if (i % 2 === 0) continue;
    if (+n[n.length - 1] === 5) continue;
    if (i % 3 === 0 && i % 9 !== 0) continue;
    cnt++;
}

console.log(cnt)