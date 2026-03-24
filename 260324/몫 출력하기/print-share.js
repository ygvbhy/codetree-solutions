const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let count = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
        count++
        console.log(input[i] / 2);
    }
    
    if (count === 3) break;
    continue;
}