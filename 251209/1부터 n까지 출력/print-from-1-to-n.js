const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let str = ''
for (let i = 1; i <= N; i++) {
    str += i + ' '
}

console.log(str.trim())