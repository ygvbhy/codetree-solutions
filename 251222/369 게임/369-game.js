const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let i = 1;
let str = '';
while(i <= N) {
    str += (i % 3 === 0 || /[369]/.test(i)) ? '0 ' : i + ' ';
    i++
}

console.log(str.trim())