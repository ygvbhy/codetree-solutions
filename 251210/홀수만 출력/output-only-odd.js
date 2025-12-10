const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = ''
for (let i = a; i <= b; i += 2){
    str += i + ' '
}

console.log(str)