const fs = require("fs");
let [a, list] = fs.readFileSync(0).toString().split('\n')
let [b, c, d, e] = list.split(' ').map(Number)

console.log(+a > b ? 1 : 0);
console.log(+a > c ? 1 : 0);
console.log(+a > d ? 1 : 0);
console.log(+a > e ? 1 : 0);