const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = ''

for (let i = b; i >= a; i--) {
    str += i + ' '
}

console.log(str.trim())