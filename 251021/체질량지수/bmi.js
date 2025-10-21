const fs = require("fs");
let [h, w] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const b = (10000 * w) / (h * h);

console.log(Math.floor(b))
console.log(b > 25 ? 'Obesity' : '')
