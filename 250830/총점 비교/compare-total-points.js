const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.trim().split(' '));

// Please write your code here.
studentData.sort((a, b) => {
    let total1 = +a[1] + +a[2] + +a[3]
    let total2 = +b[1] + +b[2] + +b[3]
    return total1 - total2
})
for (let s of studentData) {
    console.log(s[0], s[1], s[2], s[3])
}
