const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let str = ''
for (let i = 1; i <= 5; i++) {
    str += N * i + ' '
}

console.log(str.trim())