const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let str = ''
while(a >= b) {
    str += a + ' '
    a -= 2
}

console.log(str.trim())
