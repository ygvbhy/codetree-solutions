const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for(let i = 0; i < input[0]; i++) {
    console.log(("* ".repeat(input[1])).trim())
}