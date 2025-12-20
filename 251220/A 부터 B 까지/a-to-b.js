const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let i = a;
let str = ''
while(i <= b) {
    str += i + ' '
    if (i % 2 === 1) i *= 2;
    else i += 3
}

console.log(str.trim())