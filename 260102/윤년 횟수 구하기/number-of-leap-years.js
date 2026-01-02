const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let count = 0;
let i = 1
while(i <= +N) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) count++

    i++
}

console.log(count)