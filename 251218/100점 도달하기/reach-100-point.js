const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let str = ''
while(N <= 100) {
    if (N >= 90) str += 'A ';
    else if (N >= 80) str += 'B ';
    else if (N >= 70) str += 'C ';
    else if (N >= 60) str += 'D ';
    else str += 'F '

    N++;
}

console.log(str.trim())