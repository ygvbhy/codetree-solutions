const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.

studentsInput.sort((a, b) => a[1] - b[1])
for (let i = 0; i < studentsInput.length; i++) {
    console.log(studentsInput[i].join(' '))
}