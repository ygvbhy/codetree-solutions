const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let str = '';

for (let i = 0; i < 8; i++) {
    str += N
}

console.log(str)