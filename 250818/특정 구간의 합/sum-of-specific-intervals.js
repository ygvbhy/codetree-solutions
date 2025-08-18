const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.
const solution = () => {
    for (const i of queries) {
        if (i) {
            console.log(A.slice(i[0] - 1, i[1]).reduce((acc, cur) => acc += cur, 0))
        }
    }
}
solution()