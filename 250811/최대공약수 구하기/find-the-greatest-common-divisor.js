const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

function solution(a, b) {
    while(b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(solution(n, m))