const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.
const student = new Array(n + 1).fill(0);
for (const i of penalizedPersons) {
    student[i] += 1
    if (student[i] === k) {
        console.log(i)
        return
    }
}

console.log(-1)