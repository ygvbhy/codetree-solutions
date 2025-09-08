const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
const OFFSET = 100000;
const line = new Array(OFFSET * 2 + 1).fill(0);

let pos = OFFSET;

for (let i = 0; i < n; i++) {

}

console.log(commands)