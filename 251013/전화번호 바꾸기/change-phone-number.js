const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split('-')

console.log(`${a}-${c}-${b}`)
