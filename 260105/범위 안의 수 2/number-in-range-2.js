const fs = require("fs");
let N = fs.readFileSync(0).toString().trim().split('\n').map(Number).filter(n => n >= 0 && n <= 200)

const sum = N.reduce((acc, cur) => cur += acc, 0)
console.log(sum, (sum / N.length).toFixed(1))
