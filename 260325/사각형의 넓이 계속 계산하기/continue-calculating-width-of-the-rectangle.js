const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i].split(' ')
    console.log(a * b)
    if (c === 'C') break;
}