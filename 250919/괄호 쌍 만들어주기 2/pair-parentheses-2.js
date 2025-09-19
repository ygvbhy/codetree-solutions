const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.
let count = 0;
let n = A.length;
for (let i = 0; i < n; i++) {
    if (A[i] === '(' && A[i + 1] === '(') {
        for (let j = i + 2; j < n; j++) {
            if (A[j] === ')' && A[j + 1] === ')') count++
        }
    }
}

console.log(count)