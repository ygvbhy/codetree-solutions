const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// Please write your code here.
const sortedB = [...arr2].sort((a, b) => a - b).join(',')
let ans = 0;
for (let i = 0; i + m <= n; i++) {
    const win = arr1.slice(i, i + m).sort((a, b) => a - b).join(',');
    if (win === sortedB) ans++
}

console.log(ans)