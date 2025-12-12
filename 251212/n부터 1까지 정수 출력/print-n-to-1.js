const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let str = "";
while(N > 0) {
    str += N + ' '
    N--
}

console.log(str)