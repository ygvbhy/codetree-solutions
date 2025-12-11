const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();
let str = ''
let s = 3;
while(s <= N) {
    str += s + ' '
    s += 3
}

console.log(str.trim())