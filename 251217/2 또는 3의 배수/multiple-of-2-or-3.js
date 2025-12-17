const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let str = ''

for (let i = 1; i <= N; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        str += '1 '
    } else str += '0 '
}

console.log(str.trim())