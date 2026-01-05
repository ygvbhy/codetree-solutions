const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let index = 1
let sum = 0
while (index < N) {
    if (N % index === 0) sum += index
    index++
}

console.log(+N === sum ? 'P' : 'N')