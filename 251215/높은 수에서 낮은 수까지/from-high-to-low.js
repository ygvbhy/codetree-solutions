const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';

let min = Math.min(a, b);
let max = Math.max(a, b);

for (let i = max; i >= min; i--) {
    str += i + ' ';
}

console.log(str.trim());