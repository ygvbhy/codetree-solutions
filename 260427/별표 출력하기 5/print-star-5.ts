declare const require: any;
const fs = require("fs");
const N = +fs.readFileSync(0).toString().trim();

for (let i = N; i > 0; i--) {
    console.log(`${"*".repeat(i)} `.repeat(i))
}