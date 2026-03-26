const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

let count = 0;
while(true) {
    if (input === 1) break;

    if (input % 2 === 0) {
        input /= 2;
    } else input = (input * 3) + 1;

    count++
}

console.log(count)