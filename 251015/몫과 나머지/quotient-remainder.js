const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

console.log(`${Math.floor(a / b)}...${a % b}`);