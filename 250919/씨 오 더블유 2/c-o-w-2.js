const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

// Please Write your code here.
let c = 0, co = 0, cow = 0
for (let s of string) {
    if (s === 'C') c += 1
    else if (s === 'O') co += c
    else if (s === 'W') cow += co
}

console.log(cow)