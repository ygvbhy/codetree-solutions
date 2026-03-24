const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

for (let i = 0; i < input.length; i++) {
    if (input[i] === 1) console.log('John');
    else if (input[i] === 2) console.log('Tom');
    else if (input[i] === 3) console.log('Paul');
    else if (input[i] === 4) console.log('Sam');
    else {
        console.log("Vacancy");
        break;
    }
}