const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
const solution = (a1, b1) => {
    for (let i = 0; i <= a1.length - b1.length; i++) {
        let match = true;
        for (let j = 0; j < b1.length; j++) {
            if (a1[i + j] !== b1[j]) {
                match = false;
                break;
            }
        }
        if (match) return true
    }
    return false
}

console.log(solution(a, b) ? 'Yes' : 'No')