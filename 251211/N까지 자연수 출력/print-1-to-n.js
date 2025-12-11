const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let a = 1;
let str = ''
while(a <= N) {
    str += a + ' '
    a++
}

console.log(str.trim())