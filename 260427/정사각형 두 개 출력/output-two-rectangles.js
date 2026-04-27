const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < input; j++) {
        console.log("*".repeat(input));
    }
    console.log('');
}