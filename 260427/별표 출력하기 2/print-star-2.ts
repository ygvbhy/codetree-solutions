declare const require: any;
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

for(let i = input; i > 0; i--) {
    console.log("* ".repeat(i));
}