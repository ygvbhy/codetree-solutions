const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = ''
if (a > 0) {
    for (let i = 0; i < b; i++) {
        str += a + ""
    }
} else {
    str = 0;
}

console.log(str)