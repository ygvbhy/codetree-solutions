const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

// Please Write your code here.
let sum = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] === '(') {
        for (let j = i + 1; j < A.length; j++) {
            if (A[j] === ')') sum++
        }
    }
}

console.log(sum);

