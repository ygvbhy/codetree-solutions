const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let str = ''

for (let i = N; i > 0; i--) str += i + ' '

console.log(str.trim())