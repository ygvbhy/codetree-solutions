const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
let max = 0;
const f = (i) => {
    if (arr.length === i) return;

    max = arr[i] > max ? arr[i] : max
    return f(i + 1)
}

f(0)
console.log(max)