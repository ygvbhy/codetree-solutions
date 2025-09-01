const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
const answer = []
for (let i = 0; i < points.length; i++) {
    const n = Math.abs(0 - points[i][0]) + Math.abs(0 - points[i][1])
    answer.push([n, i + 1])
}
answer.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1]
})
answer.map(n => console.log(n[1]))