const fs = require("fs");
let [C, N] = fs.readFileSync(0).toString().trim().split(' ');

let str = ''
if (C === 'A') {
    for (let i = 1; i <= N; i++) {
        str += i + ' '
    }
} else if (C === 'D') {
    for (let i = N; i > 0; i--) {
        str += i + ' '
    }
}

console.log(str.trim())