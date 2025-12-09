const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let str = ''
for (let i = N; i <= 100; i++) {
    str += i + ' '
}

console.log(str.trim())