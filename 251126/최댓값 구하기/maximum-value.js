const fs = require("fs");
let max = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(Math.max(...max))