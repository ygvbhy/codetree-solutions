const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
}

// Please Write your code here.
students.sort((a, b) => {
    if (a[0] !== b[0]) return +b[0] - +a[0]
    if (a[1] !== b[1]) return +b[1] - +a[1]
    return +a[2] - +b[2]
})
for (let s of students) {
    console.log(s[0], s[1], s[2])
}