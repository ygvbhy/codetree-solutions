const fs = require("fs");
let array = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(Math.min(...array));
