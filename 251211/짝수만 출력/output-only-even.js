const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = ''
while(A <= B) {
    str += A + ' '
    A += 2
}

console.log(str.trim())